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
                <div className='carInfo-price'>Price: ${carState.Price}</div>
                <div className='carInfo-details-title'>Vehicle Details</div>
                <div>
                    <ul className='carInfo-details'>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Manufacturer: {carState.Manufacturer}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Model: {carState.Model}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Year: {carState.Year}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Miles: {carState.Miles}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Color: {carState.Color}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Engine: {carState.Engine}</div>
                        </li>        
                    </ul>
                </div>
                <a href={carState.Link} className='carInfo-button'>
                    <Button size="large">Go To Dealer</Button>
                </a>
            </div>
        </div>
    );
};

export default CarInfoPage;