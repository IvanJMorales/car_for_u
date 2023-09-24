import React, { useState, useContext, createContext } from "react";
import "../styles/SearchField.css";

// Firebase imports
import { query, where, getDocs } from "firebase/firestore";

// MUI imports
import Button from '@mui/material/Button'
import { CollectionContext } from "../App";
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from "react-router";

// Create Context for results from search bar input
export const SearchResultsContext = createContext()

const SearchField = (props) => {
    // Initialize state
    const [search, setSearch] = useState('')
    
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
                //console.log("QUERY:", doc.id, " => ", doc.data());
            });

            console.log(answer)

            if (querySnapshot.size != 0) {
                navigate("/search-results/", {
                    state: {
                        search: answer
                    }
                })
            }
        };
        getQuerySnapshot();
    }

    return (
        <div className="search-bar-container">
            <SearchIcon className="search-icon"/>
            <input className='search-bar' type="search" placeholder="Search (BY MANUFACTURER ONLY)" onChange={event => setSearch(event.target.value)}></input>
            <Button onClick={() => findCar()} variant="contained">SEARCH</Button>
        </div>
    );
};

export default SearchField;