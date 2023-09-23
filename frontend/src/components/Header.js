import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

import SignIn from '../components/SignIn.js'


// Firebase
import { auth } from '../firebase';
import { browserSessionPersistence, onAuthStateChanged, setPersistence } from 'firebase/auth';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUser, selectUserEmail, selectUserName } from '../redux/features/userSlice';
import SmallNav from './SmallNav';
import { createPortal } from 'react-dom';
import { UserContext } from '../App';
import Loader from './Loader';

const Header = () => {
    //const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const user = useContext(UserContext)
    console.log(user)

    const [showPopUp, setShowPopUp] = useState(false)

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    // Media query
    useEffect(() => {
        window
        .matchMedia("(min-width: 600px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, [])

    const showLoginPopUp = () => {
        setIsLoading(true);
        setShowPopUp(true);
    }


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
                            <div>
                                <Link to='/profile' className='link'>
                                    {user.email}
                                </Link>
                            </div>
                        ) : ( 
                            <button onClick={() => showLoginPopUp()}>Sign In</button>
                        )}
                    </li>
                </ul>
            </div>
            )}

            {showPopUp && createPortal(
                <SignIn onClose={() => setShowPopUp(false)} />,
                document.body
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