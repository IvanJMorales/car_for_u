import React, { useContext, useEffect, useState } from 'react';
import '../styles/FilterSearchResults.css'

import { SearchResultsContext } from './SearchField';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { Link, useLocation, useParams } from 'react-router-dom';

import { collection, query, where, getDocs } from "firebase/firestore";

import { CollectionContext } from "../App";

// Redux
import { selectMaxPrice, selectMinPrice, } from '../redux/features/priceFilterSlice';
import { useSelector } from 'react-redux';

const FilterSearchResults = () => {
    
    // Initalize state
    const [filteredCars, setFilteredCars] = useState([])

    // Grab min and max price query from Redux store
    const minPriceQuery = useSelector(selectMinPrice)
    const maxPriceQuery = useSelector(selectMaxPrice)

    // Firebase collection reference
    const collectionRef = useContext(CollectionContext)

    // Query Firebase database to run on page render
    useEffect(() => {
        const q = query(collectionRef, where("Price", ">=", minPriceQuery.minPrice), where("Price", "<=", maxPriceQuery.maxPrice));

        const getQuerySnapshot = async () => {
            const querySnapshot = await getDocs(q);
            setFilteredCars(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getQuerySnapshot();
    }, [])

    return (
        <div className='card-container'>
            {filteredCars.map((car) => (
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

export default FilterSearchResults;