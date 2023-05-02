import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';

const LeftBG = () => {
    return (
        <div >
            <div className='justify-content-center align-items-center'>
               <h1 >Discover the flavors of Bangladesh with our authentic recipes.</h1> 
            </div>
            
            <div >
            <Button className='mb-2' variant="primary"> <FaGoogle></FaGoogle>Login with Google</Button>
            </div>
            <div>
            <Button variant="secondary"> <FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            
        </div>
    );
};

export default LeftBG;