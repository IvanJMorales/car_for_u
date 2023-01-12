import React from 'react';
import { useSelector } from 'react-redux';

// Redux
import { selectCarsToCompare } from '../redux/features/compareSlice';

const CarComparisons = () => {
    const carsToCompare = useSelector(selectCarsToCompare)

    return (
        <div>
            {carsToCompare.Name}
        </div>
    );
};

export default CarComparisons;