import React from 'react';
import SignIn from '../components/SignIn.js';
import UserProfileComparisons from '../components/UserProfileComparisons.js';

const UserProfile = () => {
    return (
        <div>
            <SignIn />
            <UserProfileComparisons />
        </div>
    );
};

export default UserProfile;