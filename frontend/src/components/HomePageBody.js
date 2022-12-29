import React from 'react';
import "../styles/HomePageBody.css";
import Button from "@mui/material/Button";

const HomePageBody = () => {
    return (
        <div className='home-page-body'>
            <div className='banner-text'>
                EASIEST WAY TO FIND YOUR NEXT CAR
            </div>
            <div className='subtitle'>
                Search through multiple websites all in one place
            </div>
            <div className='button'>
                <a href='/search-page'>
                    <Button variant="contained">Find the Car for You</Button>
                </a>
            </div>
        </div>
    );
};

export default HomePageBody;