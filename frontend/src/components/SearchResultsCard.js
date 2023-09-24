import React, { useState, useEffect, useContext } from 'react';
import '../styles/SearchResultsCard.css';

// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Textfit } from 'react-textfit';

import { Link, useNavigate } from 'react-router-dom';

import { addDoc } from 'firebase/firestore';

import { CollectionContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsToCompare, setCarsToCompare, setRemoveCarFromCompare } from '../redux/features/compareSlice';

const SearchResultsCard = (props) => {
    //const [compareCars, setCompareCars] = useState([]);
    const [fav, setFav] = useState("false");

    // Set Redux dispatch
    const dispatch = useDispatch();

    // Redux
    const carsToCompare = useSelector(selectCarsToCompare)

    // Add selected car to compare array
    const addCarToCompare = (vehicle) => {
        dispatch(setCarsToCompare(
            vehicle
        ))
        setFav(!fav);
    }

    // Remove selected car from compare array
    const removeCarFromCompare = (vehicle) => {
        dispatch(setRemoveCarFromCompare(
            vehicle
        ))
        setFav(!fav);
    }

    // Change font size of car name based on text length
    useEffect(() => {
        const getFontSize = (textLength) => {
            const baseSize = 9
            if (textLength >= baseSize) {
                textLength = baseSize - 2.5
            }
            const fontSize = baseSize - textLength
                return `${fontSize}vh`
        }

        const boxes = document.querySelectorAll('.card-title')
        
        boxes.forEach(box => {
            box.style.fontSize = getFontSize(box.textContent.length)
        })
    })

    return (
        <div className='card-container'>
            {props.cars.map((car) => (
                <Card className='card' key={car.id} value={car.CarMake}>
                    <CardActionArea>
                        <Link to={'/car-info/' + car.id}>
                            <CardMedia
                                component="img"
                                alt="CAR IMAGE"
                                height="180"
                                image={car.Image}
                            />
                        </Link>
                    </CardActionArea>

                    {/***Favorite (Heart Icon) and Comparison Button***/}
                    {carsToCompare.carsToCompare.includes(car) ? (
                        <FavoriteIcon className='fav-button' style={{ color: 'orange' }} onClick={() => removeCarFromCompare(car)}/>
                    ) : (
                        <FavoriteBorderIcon className='fav-button' color='primary' onClick={() => {addCarToCompare(car); console.log(car)}}/>
                    )}
                    <Typography className='card-title' variant="h5" margin='-5px'>
                        {car.Name}
                    </Typography>
                    <CardContent className='card-content'>
                        <Typography className='card-info' variant="h7" color="text.secondary" p='x' margin='5px'>
                            Miles: {car.Miles}
                        </Typography>
                        <Typography className='card-info' variant="h6">
                            Price: ${car.Price}
                        </Typography>
                    </CardContent>
                    <CardActions className='actions'>
                        <a href={car.Link}>
                            <Button size="small">Go to site</Button>
                        </a>
                    </CardActions>
                </Card>
            )
            )}
        </div>
    );
};

export default SearchResultsCard;