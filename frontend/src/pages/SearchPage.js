import React, { useEffect, useState, useContext } from 'react';
import "../styles/SearchPage.css";

// Components Imports
import SearchField from "../components/SearchField";
import SearchResultsCard from "../components/SearchResultsCard";
import CarFavoritesDrawer from '../components/CarFavoritesDrawer.js';
import Loading from '../components/Loading';

// Firebase Imports
import { getDocs } from "firebase/firestore";

// MUI Imports
import Pagination from '@mui/material/Pagination';
import FilterSection from '../components/FilterSection';
import { useSelector } from 'react-redux';
import { selectCarsToCompare } from '../redux/features/compareSlice';
import { CollectionContext } from '../App';
import SearchResultsCounter from '../components/SearchResultsCounter';



const SearchPage = () => {
    // Init state
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Redux
    const carsToCompareRef = useSelector(selectCarsToCompare);

    // Grab Vehicles collection from Firestore Database
    const collectionRef = useContext(CollectionContext);

    // Grab each Document in Vehicle Collection from Firestore Database
    // and set to cars
    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            const data = await getDocs(collectionRef);
            setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setIsLoading(false)
        };
        getData();
    }, []);

    return (
        <div>
            {isLoading ?
                <Loading />
                : <div className='search-page-body'>
                    <div>
                        <FilterSection />
                    </div>
                    <div>
                        <SearchField
                            collectionRef={collectionRef}
                            cars={cars}
                        />
                        <SearchResultsCounter cars={cars} />
                        <SearchResultsCard
                            cars={cars}
                        />
                    </div>
                </div>
            }
            {/*** Render comparison drawer at bottom if carsToCompareRef contains a car ***/}
            {carsToCompareRef.carsToCompare.length ? (
                <CarFavoritesDrawer />
            ):(
                null
            )}
        </div>   
    )
}

export default SearchPage