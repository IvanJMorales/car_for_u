import React, { useEffect, useState, useContext, createContext } from "react";
import '../styles/PriceFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

import { CollectionContext } from "../App";
import { useNavigate } from "react-router";

import Button from '@mui/material/Button'
import { selectMaxPrice, selectMinPrice, setMaxPrice, setMinPrice } from "../redux/features/priceFilterSlice";
import { Link } from "react-router-dom";


function PriceFilter() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  // Redux
  const dispatch = useDispatch();

  const sendPriceQuery = (minPrice, maxPrice) => {
      dispatch(setMinPrice(
        minPrice
      ))
      dispatch(setMaxPrice(
        maxPrice
      ))
  }

  return (
    <div className="price-filter-container">
        Minimum Price
        <div className="price-filter-input">
          <AttachMoneyIcon />
          <input placeholder="min" onChange={e => setMin(e.target.value)}></input>
        </div>
        <br></br>
        Maximum Price
        <div className="price-filter-input">
          <AttachMoneyIcon />
        <input placeholder="max" onChange={e => setMax(e.target.value)}></input>
        </div>
        {min && max != 0 ?
        <Link to='/filter-search-results/'>
          <Button onClick={() => sendPriceQuery(min, max)} variant="contained">SEARCH</Button>
        </Link> :
          null
        }
    </div>
  )
}

export default PriceFilter