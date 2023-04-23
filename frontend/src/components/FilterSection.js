import React from 'react';
import '../styles/FilterSection.css'
import PriceFilter from '../components/PriceFilter';


const FilterSection = () => {
    return (
        <div className='filter-section-container'>
            <PriceFilter />
        </div>
    );
};

export default FilterSection;