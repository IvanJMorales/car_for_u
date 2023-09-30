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
            <img className='carInfo-image'
                src={car.Image}
            />
            <VehicleDetailsContainer car={car}/>
        </div>
    );
};

export default CarInfoPage;