import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import RightBG from '../../Shared/RightBG/RightBG';
import LeftBG from '../../Shared/LeftBG/LeftBG';
import FeaturedRecipe from '../FeaturedRecipe/FeaturedRecipe';
import TipsAndTricks from '../TipsAndTricks/TipsAndTricks';

const Home = () => {
    return (
        <Container className='mx-auto'>
                <Row>
                    <Col lg={6}>
                        <div className=''>
                            <LeftBG></LeftBG>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <RightBG></RightBG>

                    </Col>
                </Row>
                <Row>
                    <ChefsDetails></ChefsDetails>
                   
                </Row>
                <Row>
                    <FeaturedRecipe></FeaturedRecipe>
                </Row>
                <Row>
                    <TipsAndTricks></TipsAndTricks>
                </Row>

            </Container>
    );
};

export default Home;