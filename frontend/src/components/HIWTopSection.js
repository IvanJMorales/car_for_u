import React from 'react';
import '../styles/HIWTopSection.css'

import pythonLogo from '../images/pythonLogo.jpg';

const HIWTopSection = () => {
    return (
        <div className='HIW-top-section-container'>
            <p className='HIW-top-section-paragraph'>
                Using a Python based web scraper, multiple car dealer websites are searched through, 
                grabbing information useful to a user looking to purchase a car, such as price, 
                model, manufacturer, miles, and more.
            </p>
            <img className='python-logo' src={pythonLogo}></img>
        </div>
    );
};

export default HIWTopSection;