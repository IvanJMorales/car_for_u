import React, { useEffect, useState, useContext, createContext } from "react";

// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

import { CollectionContext } from "../App";
import { useNavigate } from "react-router";

import Button from '@mui/material/Button'


function PriceFilter() {

  // Initialize State
  const [maxPrice, setMaxPrice] = useState()
  const navigate = useNavigate();

  // Set collectionRef to Collection Context from ./App
  const collectionRef = useContext(CollectionContext)

  function maxPriceQuery() {
    const q = query(collectionRef, where("Price", "<=", maxPrice));

    const getQuerySnapshot = async () => {
        const querySnapshot = await getDocs(q);
        const answer = querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("QUERY:", doc.id, " => ", doc.data());
        });

        if (querySnapshot.size != 0) {
          navigate("/filter-search-results/", {
              state: {
                  maxPrice: maxPrice
              }
          })
      }
    };
    getQuerySnapshot();
}

  return (
    <div className='price-filter-container'>
        Maximum Price
        <input placeholder='max' onChange={e => setMaxPrice(e.target.value)}></input>
        <Button onClick={() => maxPriceQuery()} variant="contained">SEARCH</Button>

    </div>
  )
}

export default PriceFilter