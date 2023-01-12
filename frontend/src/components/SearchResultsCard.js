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

import { Link, useNavigate } from 'react-router-dom';

import { CollectionContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsToCompare, setCarsToCompare } from '../redux/features/compareSlice';

const SearchResultsCard = (props) => {
    //const [compareCars, setCompareCars] = useState([]);
    const [fav, setFav] = useState("false");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const carsToCompare = [useSelector(selectCarsToCompare)]

    // Add selected car to compare array
    const addCarToCompare = (vehicle) => {
        setFav(!fav);
        dispatch(setCarsToCompare({
            carsToCompare: vehicle
        }))
    }

    // Remove selected car from compare array
    /*const removeFromCompare = (vehicle) => {
        let removeCarIndex = compareCars.indexOf(vehicle)
        if (removeCarIndex > -1) {
            compareCars.splice(removeCarIndex, 1);
            setFav(!fav);
        }
    }*/

    const data = useContext(CollectionContext)
    return (
        <div className='card-container'>
            {props.cars.map((car) => (
                <Card className='card' raised='true' key={car.id} value={car.CarMake}>
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

                    {/***Favorite (Heart Icon)***/}
                    {carsToCompare.includes(car) ? (
                        <FavoriteIcon style={{ color: 'orange' }} /*onClick={() => removeFromCompare(car)}*//>
                    ) : (
                        <FavoriteBorderIcon color='primary' onClick={() => addCarToCompare(car)}/>
                    )}

                    <Button onClick={() => navigate('/compare-cars')}>GO TO COMPARE</Button>
                    <CardContent className='card-content'>
                        <Typography className='card-title' variant="h4">
                            {car.Name}
                        </Typography>
                        <Typography className='card-info' variant="h5" color="text.secondary" p='30px'>
                            Price: ${car.Price}
                        </Typography>
                        <Typography className='card-info' variant="h5" color="text.secondary" p='30px'>
                            Miles: {car.Miles}
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