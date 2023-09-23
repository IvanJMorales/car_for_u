import React, { useContext, useEffect } from 'react';
import '../styles/SignIn.css';

//MUI
import GoogleIcon from '@mui/icons-material/Google';

// Firebase
import { auth } from '../firebase.js'
import { GoogleAuthProvider, reload, signInWithPopup, signOut, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';
import { UserContext } from '../App';


const SignIn = ({ onClose }) => {


    const provider = new GoogleAuthProvider(); // Google signin provider
    const user = useContext(UserContext)


    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                setPersistence(auth, browserSessionPersistence);
                console.log(auth.currentUser);
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <div className='sign-in-container'>
            <button onClick={onClose}>Close</button>
            <GoogleIcon onClick={() => handleSignIn()}/>
            HELLO SIGN IN
        </div>
        
    );
};

export default SignIn;