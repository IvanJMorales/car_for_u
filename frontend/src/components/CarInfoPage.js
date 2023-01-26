import React, { useState, useEffect, useContext } from 'react';
import '../styles/CarInfo.css';

import Button from '@mui/material/Button'

import { Link, useParams } from 'react-router-dom';

// Firebase imports
import { doc, getDoc } from "firebase/firestore";
import { database } from '../firebase.js';

import { CollectionContext } from '../App';


const CarInfoPage = () => {
    // Create state for car selected
    const [carState, setCarState] = useState('');

    // Get car id from end of URL
    const carId = useParams();
    console.log("CAR ID PARAM:", carId.id)

    // Get Collection Contexts from "./App"
    const collection = useContext(CollectionContext)

    // Reference document based on carId
    const docRef = doc(database, "Vehicles", carId.id)

    // Get snapshot from firebase set to docSnap, set carState to docSnap data
    useEffect(() => {
        const getCarData = async () => {
            const docSnap = await getDoc(docRef);
            //console.log(docSnap.data());
            setCarState(docSnap.data())
        };
        getCarData();
    }, []);

    return (
        <div className='container'>
            <img className='carInfo-image'
                src={carState.Image}
            />
            <div className='carInfo-container'>
                <div className='carInfo-name'>
                    {carState.Name}
                </div>
                <h1>Price: ${carState.Price}</h1>
                <h2>Vehicle Details:</h2>
                <div className='carInfo-info'>
                    <ul className='info'>
                        <li className='list-item'>
                            <h4>Manufacturer:</h4> {carState.Manufacturer}
                        </li>
                        <li className='list-item'>
                            <h4>Model:</h4> {carState.Model}
                        </li>
                        <li className='list-item'>
                            <h4>Year:</h4> {carState.Year}
                        </li>
                        <li className='list-item'>
                            <h4>Miles:</h4> {carState.Miles}
                        </li>
                        <li className='list-item'>
                            <h4>Color:</h4> {carState.Color}
                        </li>
                        <li className='list-item'>
                            <h4>Engine:</h4> {carState.Engine}
                        </li>        
                    </ul>
                </div>
                <a href={carState.Link} className='carInfo-button'>
                    <Button size="large">Go to site</Button>
                </a>
            </div>
        </div>
    );
};

export default CarInfoPage;