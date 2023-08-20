import React, { useEffect } from 'react';
import '../styles/SignIn.css';

// Firebase
import { auth } from '../firebase.js'
import { GoogleAuthProvider, reload, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';


const SignIn = ({ onClose }) => {


    const provider = new GoogleAuthProvider();
    
    const dispatch = useDispatch()

    const user = useSelector(selectUser)
    //const userName = useSelector(selectUserName)
    //const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => { // Opens Google API to sign in with Google Email
                dispatch(setActiveUser({ // Update redux state
                    user: result.user,
                    //userName: result.user.displayName, // Get name from Google Account 
                    //userEmail: result.user.email // Get email from Google Account
            }))
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setActiveUser({ // Update redux state
                user: user,
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
    
            }))
        }
        })
    }, [])

    //console.log(user.displayName)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { // Signs out of Google Account
                dispatch(setUserLogOutState()) // Update redux state
                localStorage.clear();
                console.log("CLICKED SIGN OUT")
            }).catch((err) => alert(err.message))
        window.location.reload()
    }

    return (
        <div className='sign-in-container'>
            <button onClick={onClose}>Close</button>
            HELLO SIGN IN
        </div>
        
    );
};

export default SignIn;