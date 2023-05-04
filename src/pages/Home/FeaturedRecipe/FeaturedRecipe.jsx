import React from 'react';
import './FeaturedRecipe.css'
import { Card, Col, Row } from 'react-bootstrap';
import featured_recipe from '../../../assets/images/featured_recipe/chingrimalai.png'
import recipetwo from '../../../assets/images/recipetwo/ilish.png'
import recipe3 from '../../../assets/images/recipe3/alooposto.png'
import recipe4 from '../../../assets/images/recipe4/mishtidoi.png'

const FeaturedRecipe = () => {
    return (
        <div className='recipe-container'>
            <h1>Featured Recipe</h1>
            <Row xs={1} md={2} className="g-4">
                
                    <Col>
                        <Card className='cardRecipe'>
                            <Card.Img  variant="top" src={featured_recipe} />
                            <Card.Body>
                                <Card.Title>Chingri Malai Curry (Prawn in Coconut Milk Curry): </Card.Title>
                                <Card.Text>
                                This flavorful and creamy curry features succulent prawns cooked in a coconut milk-based gravy with spices and herbs. A popular dish for special occasions, this curry is sure to impress.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardRecipe'>
                            <Card.Img variant="top" src={recipetwo} />
                            <Card.Body>
                                <Card.Title>Shorshe Ilish (Hilsa in Mustard Sauce)</Card.Title>
                                <Card.Text>
                                This iconic Bengali dish features the delicate and flavorful Hilsa fish cooked in a tangy and pungent mustard sauce. Best enjoyed with steaming hot rice, this dish is a must-try for seafood lovers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardRecipe'>
                            <Card.Img variant="top" src={recipe3} />
                            <Card.Body>
                                <Card.Title>Aloo Posto (Potatoes in Poppy Seed Paste):</Card.Title>
                                <Card.Text>
                                Aloo Posto is a simple and comforting dish made with potatoes cooked in a creamy and nutty poppy seed paste. This dish is a staple in Bengali households and pairs well with roti or paratha.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardRecipe'>
                            <Card.Img variant="top" src={recipe4} />
                            <Card.Body>
                                <Card.Title>Mishti Doi (Sweet Yogurt):</Card.Title>
                                <Card.Text>
                                End your meal on a sweet note with this classic Bengali dessert. Made with thick and creamy yogurt, this dish is sweetened with caramelized sugar and flavored with cardamom. Best served chilled, Mishti Doi is a treat for the taste buds.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
        </div>
    );
};

export default FeaturedRecipe;