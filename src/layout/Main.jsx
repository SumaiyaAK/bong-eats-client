import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import bg_image from '../assets/images/bg_image/bong_eats.png'
import LeftBG from '../pages/Shared/LeftBG/LeftBG';
import RightBG from '../pages/Shared/RightBG/RightBG';

import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import ChefsDetails from '../pages/Home/ChefsDetails/ChefsDetails';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;