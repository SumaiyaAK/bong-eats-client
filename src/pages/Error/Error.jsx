import React from 'react';
import error_img from '../../assets/images/errorpic/Medical_404_Error_Page.png'
import { Container } from 'react-bootstrap';
import './Error.css'

const Error = () => {
    return (
        <div className='errorPage'>
            
           <img src={error_img} />
           
        </div>
    );
};

export default Error;