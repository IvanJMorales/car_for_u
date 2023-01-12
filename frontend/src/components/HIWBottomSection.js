import React from 'react';
import '../styles/HIWBottomSection.css';

import reactLogo from '../images/reactLogo.png';

const HIWBottomSection = () => {
    return (
        <div className='HIW-bottom-section-container'>
            <p className='HIW-bottom-section-paragraph'>
                Finally, using the Firebase SDK, the React based front end calls to the Firestore database
                to render the data in a useful way to the user.
            </p>
            <img className='react-logo' src={reactLogo}></img>
    </div>
    );
};

export default HIWBottomSection;