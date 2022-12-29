import React, { createContext} from 'react';
import "./App.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import HowItWorks from "./components/HowItWorks";
import RightCar4U from "./components/RightCar4U";
import SearchResultsBody from './components/SearchResultsBody';
import CarInfoPage from "./components/CarInfoPage";

// Jason
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

// Firebase Imports
import { collection, getDocs } from "firebase/firestore";
import { database } from './firebase.js';
import UserProfile from './components/UserProfile';
import ComparePage from './components/ComparePage';

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
          <Route path="/how-it-works" element={<HowItWorks />}/>
          <Route path="/right-car-for-you" element={<RightCar4U />}/>
          <Route path="/car-info/:id" element={<CarInfoPage />}/>
          <Route path="/search-results/" element={<SearchResultsBody />}/>
          <Route path='/profile' element={<UserProfile />}/>
          <Route path='/compare-cars' element={<ComparePage />}/>

          {/*Jason*/}
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      <Footer />
      </CollectionContext.Provider>
    </div>
  )
}

export default App;
