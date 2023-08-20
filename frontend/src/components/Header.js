import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';
import SmallNav from './SmallNav';

const Header = () => {

    const user = useSelector(selectUser)
    //const userEmail = useSelector(selectUserEmail)
    const dispatch = useDispatch()

    const [popUp, setPopUp] = useState(false)

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

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

    // Media query
    useEffect(() => {
        window
        .matchMedia("(min-width: 600px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, [])



    return (
        <div>
            {/* Rendered if screen width size larger that 600 */}
            {matches && (
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
                            <button onChange={() => setPopUp(true)}></button>
                        )}
                    </li>
                </ul>
            </div>
            )}

            {/* Rendered if screen width smaller than 600 */}
            {!matches && (
            <div className='header'>
                <div className='logo'>
                    <Link to='/' className='logo-link'>
                        <div className='logo'>
                        </div>
                    </Link>
                </div>
                <SmallNav />
            </div>
            )}

        </div>
    );
};

export default Header;