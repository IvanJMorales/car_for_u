import React, { useEffect } from 'react';
import '../styles/SearchResultsCounter.css';

const SearchResultsCounter = (props) => {
    return (
        <div className='search-results-counter-container'>
            {props.cars.length} Results
        </div>
    );
};

export default SearchResultsCounter;