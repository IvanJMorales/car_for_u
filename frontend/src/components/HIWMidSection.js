import React from 'react';
import '../styles/HIWMidSection.css'

import firebaseLogo from '../images/firebaseLogo.png'

const HIWMidSection = () => {
    return (
        <div className='HIW-mid-section-container'>
            <img className='firebase-logo' src={firebaseLogo}></img>
            <p className='HIW-mid-section-paragraph'>
                The script then populates a Firestore database, creating a collection of vehicles.
                The collection consists of a document for each vehicle, which contains properties of
                each vehicle, such as price, miles, etc.
            </p>
        </div>
    );
};

export default HIWMidSection;