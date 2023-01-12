import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';

const Header = () => {

    const user = useSelector(selectUser)
    //const userEmail = useSelector(selectUserEmail)
    const dispatch = useDispatch()

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

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/' className='logo-link'>
                    <div className='logo'>
                    </div>
                </Link>
            </div>
            <ul className='navbar'>
                <li className='nav-item'>
                    <Link to='/search-page' className='link'>
                        SEARCH CARS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/how-it-works' className='link'>
                        HOW IT WORKS
                    </Link>
                </li>

                {/*Line in navbar*/}
                <li>
                    <div className="vl"></div>
                </li>
                {/*USER LOGIN*/}
                <li className='nav-item'>
                    {user ? (
                        <Link to='/profile' className='link'>
                            {user.email}
                        </Link>
                    ) : ( 
                        <Link to='/signin' className='link'>
                            LOGIN
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Header;