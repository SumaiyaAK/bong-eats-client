import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">Bong Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-4 ">
                        
                        <Link className='text-decoration-none fw-semibold' to='/'>Home</Link>
                        
                        <Link className='text-decoration-none fw-semibold' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none fw-semibold' to='/login'>Login</Link> 
                        
                    </Nav>
                    <Nav>
                        {
                             user && 
                            <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                        
                        }
                        
                        { user ?
                            <Button variant="secondary">Logout</Button> :
                            <Link to="login">
                              <Button variant="secondary">Login</Button>
                            </Link>
                            
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default NavigationBar;