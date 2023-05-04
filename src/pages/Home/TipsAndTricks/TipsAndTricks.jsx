import React from 'react';
import './TipsAndtricks.css'
import { Carousel } from 'react-bootstrap';
import tips1 from '../../../assets/images/tips1/tips1.png'
import tips2 from '../../../assets/images/tips2/tips2.png'
import tips3 from '../../../assets/images/tips3/tips3.png'

const TipsAndTricks = () => {
    return (
        
        <div className='Tips-Tricks'>
            <h1 className='tipsHeading'>Tips and Tricks for Recipe</h1>
            <div className="gap-4 justify-content-center align-items-center">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={tips1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='slideTitle'>Cooking Tips and Tricks</h3>
                        <p className='slideDetails'>Many visitors to a food website are looking for more than just recipes - they're also looking for ways to improve their cooking skills.
                        Knife Skills:
                            Proper knife skills are essential for any home cook. Learn how to hold and use a chef's knife, how to properly sharpen and maintain your knives, and how to safely chop, slice, and dice vegetables and meats.
                            <br></br>
                            Ingredient Substitutions:
                            Sometimes you may not have all the ingredients you need for a recipe. Learn how to substitute ingredients in your recipes, such as using applesauce instead of oil or using Greek yogurt instead of sour cream.
                        
                          </p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={tips2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='slideTitle'>Cooking Tips and Tricks</h3>
                        <p className='slideDetails'>A section on the home page could be dedicated to cooking tips and tricks, such as how to properly chop vegetables, how to make a perfect omelet, or how to cook steak to the perfect temperature.
                        Meal Planning and Prep:
                            Save time and reduce stress by planning and prepping your meals in advance. Learn how to plan a weekly menu, how to prep ingredients in advance, and how to store leftovers for later use.
                            <br></br>
                            Flavor Boosters:
                            Learn how to add flavor to your dishes with herbs, spices, and other ingredients. Discover which herbs and spices pair well with different types of cuisines, and learn how to make homemade spice blends and sauces.
                        
                        </p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={tips3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='slideTitle'>Cooking Tips and Tricks</h3>
                        <p className='slideDetails'>
                            These tips could be presented in a variety of formats, such as short videos, step-by-step photo guides, or written articles. This section could be a valuable resource for visitors looking to improve their culinary skills.
                            Cooking Techniques:
                            Learn different cooking techniques, such as roasting, grilling, sautéing, and braising. Discover how to cook different types of proteins, such as chicken, beef, fish, and tofu, and learn how to cook vegetables to perfection.
                            <br></br>
                            Baking Tips:
                            Baking can be intimidating, but with the right tips and tricks, you can become a confident baker. Learn how to measure ingredients accurately, how to properly mix and knead dough, and how to troubleshoot common baking problems.
                        </p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default TipsAndTricks;