import React, { createContext, useState, useEffect } from 'react';
import './App.css';

// Components
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import HowItWorksPage from './pages/HowItWorksPage';
import UserProfile from './pages/UserProfile';


// React Router
import {Routes, Route} from "react-router-dom";

// Firebase
import { collection, orderBy } from "firebase/firestore";
import { database, auth } from './firebase.js';
import CarComparisons from './components/CarComparisons';
import SearchResultsBody from './components/SearchResultsBody';
import CarInfoPage from './pages/CarInfoPage';
import FilterSearchResults from './pages/FilterSearchResults';
import { onAuthStateChanged } from 'firebase/auth';
import PrivateRoutes from './routes/PrivateRoutes';


/***COLLECTION REFERENCE START***/
// Collection Reference Context to make Collection accessable to all Context wrapped components
export const CollectionContext = createContext();

// Reference to firebase collection
const collectionRef = collection(database, "Vehicles");

/***COLLECTION REFERENCE END***/

/***USER CONTEXT START ***/
//User Context
export const UserContext = createContext();
/***USER CONTEXT END ***/


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          setUser(user);
          console.log(user.email, "LOGGED IN");
          // ...
      } else {
          console.log("LOGGED OUT");
          setUser(undefined);
          // User is signed out
          // ...
      }
    })
  }, [])

  return (
    <div className='App'>
      <CollectionContext.Provider value={collectionRef}>
      <UserContext.Provider value={user}>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search-page" element={<SearchPage />}/>
            <Route path="/how-it-works" element={<HowItWorksPage />}/>
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" exact element={<UserProfile />}/>
              <Route path='/filter-search-results/' element={<FilterSearchResults />}/>
            </Route>
            <Route path='/compare-cars' element={<CarComparisons />}/>
            <Route path="/search-results/" element={<SearchResultsBody />}/>
            <Route path="/car-info/:id" element={<CarInfoPage />}/>
          </Routes>
      </UserContext.Provider>
      </CollectionContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
