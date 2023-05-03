import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log('user in private route', user);
    
    if(loading){
        return <Container className="justify-content-center align-items-center"><Spinner animation="border" variant="primary" /></Container>
    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>;
};

export default PrivateRoute;