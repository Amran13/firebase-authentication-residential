import React, { useContext } from 'react';
import { authContext } from './AuthProvider';

const RentProperty = () => {
    const myContext = useContext(authContext)
    console.log(myContext)
    return (
        <div>
            <h2>Rent Property {myContext.name} </h2>
        </div>
    );
};

export default RentProperty;