import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Recipe from "../pages/Home/Recipe/Recipe";

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
    }
])

export default router;