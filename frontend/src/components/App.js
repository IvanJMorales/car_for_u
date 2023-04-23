import React, { createContext} from 'react';
import "./App.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import SearchResultsBody from './components/SearchResultsBody';
import CarInfoPage from "./components/CarInfoPage";

import UserProfile from './components/UserProfile';
import ComparePage from './components/ComparePage';
import SignIn from './components/SignIn';

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { database } from './firebase.js';

// Collection Reference Context to make Collection accessable to all Context wrapped components
export const CollectionContext = createContext()

// Reference to firebase collection
const collectionRef = collection(database, "Vehicles")

function App() {
  return (
    <div className='App'>
      <CollectionContext.Provider value={collectionRef}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/search-page" element={<SearchPage />}/>
          <Route path="/car-info/:id" element={<CarInfoPage />}/>
          <Route path="/search-results/" element={<SearchResultsBody />}/>
          <Route path='/profile' element={<UserProfile />}/>
          <Route path='/compare-cars' element={<ComparePage />}/>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      <Footer />
      </CollectionContext.Provider>
    </div>
  )
}

export default App;
