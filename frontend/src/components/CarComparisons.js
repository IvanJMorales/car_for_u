import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CarComparison.css'

import { Link, useNavigate } from 'react-router-dom';

// Redux
import { selectCarsToCompare } from '../redux/features/compareSlice';


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

const CarComparisons = () => {
    const carsToCompare = useSelector(selectCarsToCompare)

    const navigate = useNavigate();


    return (
        <div className='comparison-table'>
            {carsToCompare.carsToCompare.map((car => (
                <div className='grid-item' key={car.id} value={car.CarMake}>
                    <img className='comparison-image' src={car.Image}></img>
                    <ul className='comparison-details'>
                        <li className='comparison-details-item'>{car.Name}</li>
                        <li className='comparison-details-item'>{car.Manufacturer}</li>
                        <li className='comparison-details-item'>{car.Model}</li>
                        <li className='comparison-details-item'>{car.Miles}</li>
                        <li className='comparison-details-item'>{car.Miles}</li>
                    </ul>
                </div>
            )))}
        </div>
    );
};

export default CarComparisons;