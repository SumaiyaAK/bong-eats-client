import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import './NavigationBar.css'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Navbar className='NavBar' collapseOnSelect expand="lg" bg="orange" variant="orange">
            {/* <Navbar className='NavBar' collapseOnSelect expand="lg" bg="dark" variant="dark" > */}
            <Container className='NabarContainer'>
                <Navbar.Brand href="#home" className="fw-bold fs-2">Bong Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav " >
                    <Nav className="mx-auto gap-4 my-auto ">
                        
                        <Link className='text-decoration-none fw-bold text-dark fs-5' to='/'>Home</Link>
                        
                        <Link className='text-decoration-none fw-bold text-dark fs-5' to='/blog'>Blog</Link>
                         
                        
                    </Nav>
                    <Nav>
                        {
                             user && 
                            <img src={user.photo} style={{fontSize: '2rem', border:'2px solid black', width: '50px', margin:'0px 8px'  }}></img>
                        
                        }
                        


                        { user ?
                            <Button className='bg-dark' onClick={handleLogOut} variant="secondary">Logout</Button> :
                            <Link to="login">
                              <Button className='bg-dark fw-semibold' variant="secondary">Login</Button>
                            </Link>
                            
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default NavigationBar;