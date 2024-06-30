import React, { useContext } from 'react'
import { AuthContext } from '../contextApi/AuthContext';
import { Navigate } from 'react-router-dom';

const Authentic = ({ children }) => {
    const { token } = useContext(AuthContext)

    if (token === undefined || token.length < 10) {
        return <Navigate to={"/login"} replace />;

    }
    return children;
}

export const ISLogin = ({ children }) => {
    const { token } = useContext(AuthContext)
    if (token !== undefined || token.length > 10) {
        return <Navigate to={"/"} replace />;

    }
    return children;

}

export default Authentic