import React, { useState, useEffect, useContext } from 'react';
import '../styles/CarInfo.css';

// MUI Imports
import Button from '@mui/material/Button'

// React Router Imports
import { Link, useParams } from 'react-router-dom';

// Firebase Imports
import { doc, getDoc } from "firebase/firestore";
import { database } from '../firebase.js';
import VehicleDetailsContainer from '../components/VehicleDetailsContainer';


const CarInfoPage = () => {
    // Create state for car selected
    const [car, setCar] = useState('');

    // Get car ID from end of URL
    const carId = useParams();

    // Reference document based on carId
    const docRef = doc(database, "Vehicles", carId.id)

    // Get snapshot from firebase set to docSnap, set carState to docSnap data
    useEffect(() => {
        const getCarData = async () => {
            const docSnap = await getDoc(docRef);
            setCar(docSnap.data())
        };
        getCarData();
    }, []);

    // Change font size of car name based on text length
    useEffect(() => {
        const getFontSize = (textLength) => {
        const baseSize = 9
        if (textLength >= baseSize) {
            textLength = baseSize - 3
        }
        const fontSize = baseSize - textLength
            return `${fontSize}vw`
        }

        const boxes = document.querySelectorAll('.carInfo-name')
        
        boxes.forEach(box => {
            box.style.fontSize = getFontSize(box.textContent.length)
        })
    })

    return (
        <div className='carInfo-body'>
                                <VehicleDetailsContainer />

            <div className='left-container'>
                <img className='carInfo-image'
                    src={car.Image}
                />
                <div className='vehicle-overview-container'>
                    HELLO
                </div>
            </div>
            <div className=''>

            </div>
            <div className='carInfo-container'>
                <div className='carInfo-name'>
                    {car.Name}
                </div>
                <div className='carInfo-price'>Price: ${car.Price}</div>
                <div className='carInfo-details-container'>
                    <div className='carInfo-details-title'>Vehicle Details</div>
                    <ul className='carInfo-details-grid'>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Manufacturer: {car.Manufacturer}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Model: {car.Model}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Year: {car.Year}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Miles: {car.Miles}</div> 
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Color: {car.Color}</div>
                        </li>
                        <li className='list-item'>
                            <div className='carInfo-list-detail'>Engine: {car.Engine}</div>
                        </li>        
                    </ul>
                </div>
                <a href={car.Link} className='carInfo-button'>
                    <Button size="large">Go To Dealer</Button>
                </a>
            </div>
        </div>
    );
};

export default CarInfoPage;