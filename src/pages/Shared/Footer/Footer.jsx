import React from 'react';
import './Footer.css'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='Footer'>
            <p className='text-center'><small>copyright of my news </small></p>
            <Container className='container mx-auto'>
                {/* <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                    <Col>2 of 2</Col>
                </Row> */}
                <Row>
                    <Col className='gap-4'>
                        <div>
                            <p className='text-light'><small>
                                About Us:
                                <br></br>
                                Our food website is dedicated to providing delicious recipes, <br></br> cooking tips, and food-related content to food lovers <br></br> around the world. We are passionate about sharing our <br></br> knowledge and expertise in the kitchen, and we strive to <br></br> inspire others to explore new flavors and cuisines.</small></p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='text-light '>
                                <small>
                                    Contact Us:
                                    <br></br>
                                    If you have any questions, comments, or suggestions, <br></br> please don't hesitate to get in touch with us. 
                                    <br></br>
                                    <br></br>
                                    
                                    <br></br>
                                    <span ><FaMailBulk></FaMailBulk></span> Email: bongeats@foodwebsite.com <br></br>
                                    <span ><FaPhone></FaPhone></span> Phone: 555-123-4567
                                </small>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='text-light'>
                                <small>
                                    Follow Us:
                                    <br></br>
                                    Stay up to date with our latest recipes and food-related <br></br> content by  following us on social media. 

                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <span ><FaFacebook></FaFacebook></span> Facebook: facebook.com/foodwebsite <br></br>
                                    <span ><FaTwitter></FaTwitter></span> Twitter: twitter.com/foodwebsite <br></br>
                                    <span ><FaInstagram></FaInstagram></span> Instagram: instagram.com/foodwebsite
                                </small>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;