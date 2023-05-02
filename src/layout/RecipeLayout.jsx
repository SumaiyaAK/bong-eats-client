import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails/RecipeDetails';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <RecipeDetails></RecipeDetails>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;