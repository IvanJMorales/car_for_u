import React from 'react';
import SignIn from '../components/SignIn.js';
import UserProfileComparisons from '../components/UserProfileComparisons.js';
import UserProfileBody from '../components/UserProfileBody.js';

const UserProfile = () => {
    return (
        <div>
            <UserProfileBody />
            <UserProfileComparisons />
        </div>
    );
};

export default UserProfile;