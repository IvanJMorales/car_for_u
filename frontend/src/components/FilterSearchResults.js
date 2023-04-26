import React, { useContext, useEffect, useState } from 'react';

import { SearchResultsContext } from './SearchField';

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

const FilterSearchResults = () => {

    // Init state
    const [cars, setCars] = useState([])

    // Redux
    const maxPrice = useSelector(selectMaxPrice)

    // Set collectionRef to Collection Context from ./App
    const collectionRef = useContext(CollectionContext)

    return (
        <div className='card-container'>
            {cars.map((car) => (
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