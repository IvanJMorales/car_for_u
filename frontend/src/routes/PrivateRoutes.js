import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate, Outlet} from 'react-router';
import { useSelector } from 'react-redux';
import { selectMaxPrice, selectMinPrice } from '../redux/features/priceFilterSlice';

const PrivateRoutes = () => {
    const user = useContext(UserContext);

    const minPrice = useSelector(selectMinPrice)
    const maxPrice = useSelector(selectMaxPrice)

    return (
        <div>
            {user ? <Outlet/> : <Navigate to="/"/>}
        </div>
    );
};

export default PrivateRoutes;