import React, { useEffect, useState, useContext, createContext } from "react";
import { useDispatch, useSelector } from 'react-redux';


// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

import { CollectionContext } from "../App";
import { useNavigate } from "react-router";

import Button from '@mui/material/Button'
import { selectMaxPrice, setMaxPrice, setMinPrice } from "../redux/features/priceFilterSlice";
import { Link } from "react-router-dom";


function PriceFilter() {

  // Redux
  const dispatch = useDispatch();

  const sendMinPrice = (minPrice) => {
    dispatch(setMinPrice(
      minPrice
    ))
  }

  const sendMaxPrice = (maxPrice) => {
    dispatch(setMaxPrice(
      maxPrice
    ))
  }

  return (
    <div className='price-filter-container'>
        Minimum Price
        <input placeholder="min" onChange={e => sendMinPrice(e.target.value)}></input>
        <br></br>
        Maximum Price
        <input placeholder="max" onChange={e => sendMaxPrice(e.target.value)}></input>
        <Link to='/filter-search-results/'>
          <Button variant="contained">SEARCH</Button>
        </Link>
    </div>
  )
}

export default PriceFilter