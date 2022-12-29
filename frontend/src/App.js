import React, { createContext } from 'react';
import './App.css';

// Components
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import HowItWorksPage from './components/HowItWorksPage';

// React Router
import {Routes, Switch, Route} from "react-router-dom";

// Firebase
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
            <Route path="/how-it-works" element={<HowItWorksPage />}/>
            {/*<Route path="/right-car-for-you" element={<RightCar4U />}/>
            <Route path="/car-info/:id" element={<CarInfoPage />}/>
            <Route path="/search-results/" element={<SearchResultsBody />}/>
            <Route path='/profile' element={<UserProfile />}/>
            <Route path='/compare-cars' element={<ComparePage />}/>
            <Route path='/signup' element={<SignupPage />}/>
            <Route path='/login' element={<LoginPage />}/>*/}
          </Routes>
        <Footer />
      </CollectionContext.Provider>
    </div>
  );
}

export default App;
