import React, { useState, useEffect } from 'react';
import '../styles/FilterSection.css'
import PriceFilter from '../components/PriceFilter';
import FilterList from './FilterList';
import TuneIcon from '@mui/icons-material/Tune';
import SmallFilterList from './SmallFilterList';

const FilterSection = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    // Media query
    useEffect(() => {
        window
        .matchMedia("(min-width: 600px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, [])

    return (
        <div>
            {matches && (
                <div className='filter-section-container'>
                    <FilterList />
                </div>
            )}

            {!matches && (
                null
            )}
        </div>    
    );
    
};

export default FilterSection;