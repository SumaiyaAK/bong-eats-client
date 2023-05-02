import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefsDetails = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    })

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-center align-items-center">
            {
                recipes.map(recipe => <Card style={{ width: '20rem' }}
                    key={recipe.id}
                >
                    {/* <Card style={{ width: '18rem' }}> */}


                    <Card.Img style={{ width: '17rem', height:'23rem'  }}  variant="top" src={recipe.chef_img}></Card.Img>

                    <Card.Body>
                        <Card.Title>{recipe.chefs_name}</Card.Title>
                        <Card.Text>Years of Experience: {recipe.experience}</Card.Text>
                        <Card.Text>Number of Recipe: {recipe.number_of_recipe}</Card.Text>
                        <Link to={`/recipeDetails/${recipe.id}`}>
                            <Button variant="primary">View Recipe</Button>
                        </Link>

                    </Card.Body>
                    {/* </Card> */}

                </Card>)
            }

        </div>
    );
};

export default ChefsDetails;