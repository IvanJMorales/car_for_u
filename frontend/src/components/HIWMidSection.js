import React from 'react';
import '../styles/HIWMidSection.css'

import firebaseLogo from '../images/firebaseLogo.png'

const HIWMidSection = () => {
    return (
        <div className='HIW-mid-section-container'>
            <img className='firebase-logo' src={firebaseLogo}></img>
            <p className='HIW-mid-section-paragraph'>
                The script then populates a Firestore database that is then called to by 
                using the Firebase SDK to render the data to the user using React
            </p>
        </div>
    );
};

export default HIWMidSection;