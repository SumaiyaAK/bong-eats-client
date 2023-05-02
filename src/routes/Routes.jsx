import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Recipe from "../pages/Home/Recipe/Recipe";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails/RecipeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:  [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/recipe/:id',
                element: <Recipe></Recipe>
            }
        ]
    },
    {
        path: 'recipeDetails',
        element:<RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>
            }
        ]
    }
])

export default router;