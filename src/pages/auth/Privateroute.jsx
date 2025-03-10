import React, { useContext, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from './Authprovider';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation()
    console.log(user)

    if (loading){
        return <progress className='progress w-56'></progress>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Privateroute;