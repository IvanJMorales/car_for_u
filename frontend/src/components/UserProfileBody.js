import React, { useContext } from 'react';
import '../styles/UserProfileBody.css'

// React Router
import { Link, redirect, useNavigate } from 'react-router-dom';


import SignIn from '../components/SignIn.js';

import { Avatar } from '@mui/material';

// Firebase
import { auth } from '../firebase.js'
import { GoogleAuthProvider, reload, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';
import { UserContext } from '../App';


const UserProfileBody = () => {

    const user = useContext(UserContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { // Signs out of Google Account
                localStorage.clear();
                //console.log("CLICKED SIGN OUT");
                //console.log(user.email);
                navigate("/");
                window.location.reload();
            }).catch((err) => alert(err.message))
    }

    return (
        <div className='profile-body'>
            <Avatar />
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </div>
    );
};

export default UserProfileBody;