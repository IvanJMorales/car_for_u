import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CarComparison.css'

import { Link, useNavigate } from 'react-router-dom';

// Redux
import { selectCarsToCompare } from '../redux/features/compareSlice';

const CarComparisons = () => {

    // Redux selector
    const carsToCompare = useSelector(selectCarsToCompare)

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
                        <li className='comparison-details-item'>{car.Engine}</li>
                    </ul>
                </div>
            )))}
        </div>
    );
};

export default CarComparisons;