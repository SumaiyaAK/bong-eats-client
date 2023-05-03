import React from 'react';
import error_img from '../../assets/images/errorpic/error-404.png'
import { Container } from 'react-bootstrap';

const Error = () => {
    return (
        <div>
            <Container className='error-cover'>
                <img src={error_img} />
            </Container>
        </div>
    );
};

export default Error;