import React, { useEffect, useState, createContext, useContext } from 'react';
import "../styles/SearchPage.css";

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { database } from '../firebase.js';

// Components Imports
import SearchField from "./SearchField";
import SearchResultsCard from "./SearchResultsCard";
import UserProfileComparisons from './UserProfileComparisons.js';

// Mui Imports
import Pagination from '@mui/material/Pagination';
import FilterSection from './FilterSection';
import { useSelector } from 'react-redux';
import { selectCarsToCompare } from '../redux/features/compareSlice';



const SearchPage = () => {
    // Create state for cars
    const [cars, setCars] = useState([]);

    // Grab Vehicles collection from Firestore Database
    const collectionRef = collection(database, "Vehicles")

    // Grab each Document in Vehicle Collection from Firestore Database
    // and set to cars
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef);
            setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getData();
    }, []);

    const carsToCompareRef = useSelector(selectCarsToCompare)

    return (
        <div>
            <div className="primary-search-container">
                <SearchField
                    collectionRef={collectionRef}
                    cars={cars}
                />
            </div>
            <div className='search-page-body'>
                <FilterSection />
                <SearchResultsCard 
                    cars={cars}
                />
            </div>
            
            {/*** Render comparison drawer at bottom if carsToCompareRef contains a car ***/}
            {carsToCompareRef.carsToCompare.length ? (
                <UserProfileComparisons/>
            ):(
                null
            )}
        </div>
    )
}

export default SearchPage