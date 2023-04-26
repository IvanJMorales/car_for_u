import React from 'react';
import '../styles/FilterSection.css'
import PriceFilter from '../components/PriceFilter';
import FilterList from './FilterList';

const FilterSection = () => {
    return (
        <div className='filter-section-container'>
            <FilterList />
        </div>
    );
};

export default FilterSection;