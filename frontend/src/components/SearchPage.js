import React, { useEffect, useState, createContext, useContext } from 'react';
import "../styles/SearchPage.css";

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { database } from '../firebase.js';

// Components Imports
import SearchField from "./SearchField";
import SearchResultsCard from "./SearchResultsCard";

// Mui Imports
import Pagination from '@mui/material/Pagination';



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
            console.log(data);
        };
        getData();
    }, []);

    return (
        <div>
            <div className="primary-search-container">
                <SearchField
                    collectionRef={collectionRef}
                    cars={cars}
                />
            </div>
                <SearchResultsCard 
                    cars={cars}
                />
            <Pagination className='page-number'count={10} />
        </div>
    )
}

export default SearchPage