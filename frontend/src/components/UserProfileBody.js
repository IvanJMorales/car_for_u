import React from 'react';
import '../styles/UserProfileBody.css'

import SignIn from '../components/SignIn.js';

import { Avatar } from '@mui/material';

const UserProfileBody = () => {
    return (
        <div className='profile-body'>
            <Avatar />
            <SignIn />
            
        </div>
    );
};

export default UserProfileBody;