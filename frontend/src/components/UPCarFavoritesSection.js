import React, { useEffect } from 'react';

import { useContext } from 'react';
import { CollectionContext, UserContext } from '../App';

// Redux Imports
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';


const UPCarFavoritesSection = () => {

    // Set collectionRef to Collection Context from ./App
    const collectionRef = useContext(CollectionContext)

    const user = useContext(UserContext);
    
    return (
        <div>
            {user ? (
                <div>{user.email}</div>
            ): <div>NOBDOY</div>}
        </div>
    );
};

export default UPCarFavoritesSection;