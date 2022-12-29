import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"


const Header = () => {
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
                    <Link to='/login' className='link'>
                        LOGIN
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;