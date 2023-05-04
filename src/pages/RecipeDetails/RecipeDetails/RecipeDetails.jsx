
import { Button, Card, CardImg, Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './RecipeDetails.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeDetails = () => {
  const { id } = useParams()
  const recipeDetails = useLoaderData();
  console.log(recipeDetails);

  
  const notify = () => toast("Added to Favorites!");


  return (
    <Container className='recipeContainer'>
      {
        recipeDetails.map(r => <Card className='recipeDetailsCard'
          key={r.id}
        >
          <div>
            <CardImg variant="top" src={r.recipe_img} />
          </div>
          <div>
            <Card.Body>

              <Card.Title>{r.recipes_name}</Card.Title>
              <Card.Text>
                {r.ingredients}
              </Card.Text>
              <Card.Text>
                {r.cooking_method}
              </Card.Text>

              <Card.Text>
                <div className='d-flex gap-4'>
                  <div>
                    <Rating className=''
                      placeholderRating={r.rating.number}
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                  </div>

                  <div className=''>
                    <p>{r.rating?.number}</p>
                  </div>
                </div>
              </Card.Text>
              {/* <Button onClick={handleFavourite}variant="dark">Favourite</Button> */}

             {/*Toastfy added  */}
              <div>
                <button className='favoritButton' onClick={notify}>Favorite</button>
                <ToastContainer />
              </div>

            </Card.Body>
          </div>
        </Card>)
      }





    </Container>

  );
};



export default RecipeDetails;