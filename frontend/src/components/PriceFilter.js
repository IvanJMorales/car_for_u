import React, { useEffect, useState, useContext, createContext } from "react";
import { useDispatch, useSelector } from 'react-redux';


// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

import { CollectionContext } from "../App";
import { useNavigate } from "react-router";

import Button from '@mui/material/Button'
import { selectMaxPrice, setMaxPrice } from "../redux/features/priceFilterSlice";
import { Link } from "react-router-dom";


function PriceFilter() {

  // Initialize State
  //const [maxPrice, setMaxPrice] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux
  const maxPrice = useSelector(selectMaxPrice)

  // Set collectionRef to Collection Context from ./App
  const collectionRef = useContext(CollectionContext)

  /*function maxPriceQuery() {
    const q = query(collectionRef, where("Price", "<=", maxPrice.maxPrice));

    const getQuerySnapshot = async () => {
        const querySnapshot = await getDocs(q);
        const answer = querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("QUERY:", doc.id, " => ", doc.data());
        });

        if (querySnapshot.size != 0) {
          navigate("/filter-search-results/", {

          })
      }
    };
    getQuerySnapshot();
  }*/


  const sendMaxPrice = (price) => {
    dispatch(setMaxPrice(
      price
    ))
    console.log("MAX PRICE CHANGED")
  }



  return (
    <div className='price-filter-container'>
        Maximum Price
        <input placeholder='max' onChange={e => sendMaxPrice(e.target.value)}></input>
        <Link to='/filter-search-results/'>
          <Button variant="contained">SEARCH</Button>
        </Link>
    </div>
  )
}

export default PriceFilter