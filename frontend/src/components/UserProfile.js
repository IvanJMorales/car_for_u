import React from 'react';

// Components
import UserProfileBody from '../components/UserProfileBody.js';
import UPCarFavoritesSection from './UPCarFavoritesSection.js';

const UserProfile = () => {
    return (
        <div>
            <UserProfileBody />
            <UPCarFavoritesSection />
        </div>
    );
};

export default UserProfile;