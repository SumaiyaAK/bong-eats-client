import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import bg_image from '../assets/images/bg_image/bong_eats.png'
import LeftBG from '../pages/Shared/LeftBG/LeftBG';
import RightBG from '../pages/Shared/RightBG/RightBG';
import ChefsDetails from '../pages/Shared/ChefsDetails/ChefsDetails';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mx-auto'>
                {/* <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row> */}

                <Row>
                    <Col lg={6}>
                        <div className=''>
                            <LeftBG></LeftBG>
                            {/* <h1>Discover the flavors of Bangladesh with our authentic recipes.</h1> */}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <RightBG></RightBG>
                        
                    </Col>
                </Row>

            </Container>
            <ChefsDetails>
            {/* <Outlet></Outlet> */}
            </ChefsDetails>

            <Footer></Footer>
        </div>
    );
};

export default Main;