import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ChefDetails.css'
// import RecipeCard from '../RecipeCard/RecipeCard';


const ChefsDetails = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    })

    return (
        <Container>
            <h1 className='chefDetailsHeading'>Behind the Apron: Discover the Story and <br></br> Inspiration of Our Chef</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gap-4 justify-content-center align-items-center">

                {
                    recipes.map(recipe => <Card style={{ width: '20rem' }}
                        key={recipe.id}
                    // recipe = {recipe}
                    >
                        {/* <Card style={{ width: '18rem' }}> */}

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 gap-4 justify-content-center align-items-center">
                            <Card.Img className='ChefCard' style={{ width: '17rem', height: '23rem', alignItems: "center" }} variant="top" src={recipe.chef_img}></Card.Img>

                            <Card.Body>
                                <Card.Title>{recipe.chefs_name}</Card.Title>
                                <Card.Text>Years of Experience: {recipe.experience}</Card.Text>
                                <Card.Text>Number of Recipe: {recipe.number_of_recipe}</Card.Text>
                                <Card.Text><FaThumbsUp></FaThumbsUp>  Likes: {recipe.likes}</Card.Text>
                                <Link to={`/recipeDetails/${recipe.id}`}>
                                    <Button className='chefBTN' variant="primary">View Recipe</Button>
                                </Link>

                            </Card.Body>
                        </div>
                        {/* </Card> */}

                    </Card>)
                }

            </div>
        </Container>
    );
};

export default ChefsDetails;