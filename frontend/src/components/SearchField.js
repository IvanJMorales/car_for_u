import React, { useEffect, useState, useContext, createContext } from "react";
import "../styles/SearchField.css";

// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

// MUI imports
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { CollectionContext } from "../App";

import { useNavigate } from "react-router";
import SearchResultsBody from "./SearchResultsBody";

import { Link } from "react-router-dom";

// Create Context for results from search bar input
export const SearchResultsContext = createContext()

const SearchField = (props) => {
    // Initialize state
    const [search, setSearch] = useState('')
    const [value, setValue] = useState([])
    
    // State of Advanced Search
    const [manuSelect, setManuSelect] = useState('')

    const navigate = useNavigate();

    // Set collectionRef to Collection Context from ./App
    const collectionRef = useContext(CollectionContext)

    // Query through Manucturers to match car with user input
    function findCar() {
        const q = query(collectionRef, where("Manufacturer", "==", search));

        const getQuerySnapshot = async () => {
            const querySnapshot = await getDocs(q);
            const answer = querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log("QUERY:", doc.id, " => ", doc.data());
            });
            if (querySnapshot.size != 0) {
                navigate("/search-results/", {
                    state: {
                        search: search
                    }
                })
            }
        };
        getQuerySnapshot();
    }

    // MENU OPTION CLICK
    const handleClick = (e) => {
        setManuSelect(e.currentTarget.dataset)
        console.log(manuSelect)
    }

    // Variable to check for duplicates of Manufacturers
    const manuDuplicateCheck = []
    const yearDuplicateCheck = []

    // Sort manufacturer names in aphabetical order
    props.cars.sort((a,b) => a.Name.localeCompare(b.Name))
    //console.log("CARS ARRAY:", props.cars)

    return (
        <div className="selection-area">
            <div className="search-bar-container">
                <input className='search-bar' type="search" placeholder="Search (BY MANUFACTURER ONLY)" onChange={event => setSearch(event.target.value)}></input>
                <Button onClick={() => findCar()} variant="contained">SEARCH</Button>
            </div>
        </div>
    );
};

export default SearchField;