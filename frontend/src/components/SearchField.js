import React, { useState, useEffect, useContext, createContext } from "react";
import "../styles/SearchField.css";

// Firebase imports
import { query, where, getDocs } from "firebase/firestore";

// MUI imports
import Button from '@mui/material/Button'
import { CollectionContext } from "../App";
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from "react-router";
import SmallFilterList from "./SmallFilterList";

// Create Context for results from search bar input
export const SearchResultsContext = createContext()

const SearchField = (props) => {
    // Initialize state
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    
    // Set navigate
    const navigate = useNavigate();

    // Set collectionRef to Collection Context from ./App
    const collectionRef = useContext(CollectionContext)
    const q = query(collectionRef, where("Manufacturer", "==", search));

    // Query through Manucturers to match car with user input
    function findCar() {
        const getQuerySnapshot = async () => {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setSearchResult(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            });
        }
        getQuerySnapshot();
    }

    // If searchResult is not empty, navigate to search-results 
    // path and push state to SearchResultsBody.js
    if (searchResult != 0) {
        navigate("/search-results/", {
            state: {
                searchResult: searchResult
            }
        })
    }

    // Media query
    useEffect(() => {
        window
        .matchMedia("(min-width: 600px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, [])

    return (
        <div>
            {matches && (
                <div className="search-bar-container">
                    <SearchIcon className="search-icon"/>
                    <input className='search-bar' type="search" placeholder="Search (BY MANUFACTURER ONLY)" onChange={event => setSearch(event.target.value)}></input>
                    <Button onClick={() => findCar()} variant="contained">SEARCH</Button>
                </div>
            )}
            {!matches && (
                <div className="search-bar-container">
                    <SmallFilterList />
                    <SearchIcon className="search-icon"/>
                    <input className='search-bar' type="search" placeholder="Search (BY MANUFACTURER ONLY)" onChange={event => setSearch(event.target.value)}></input>
                    <Button onClick={() => findCar()} variant="contained">SEARCH</Button>
                </div>
            )}
        </div>
    );
};

export default SearchField;