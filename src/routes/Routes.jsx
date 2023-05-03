// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home/Home";
// import Main from "../layout/Main";
// import Recipe from "../pages/Home/Recipe/Recipe";
// import RecipeLayout from "../layout/RecipeLayout";
// import RecipeDetails from "../pages/RecipeDetails/RecipeDetails/RecipeDetails";
// import LoginLayout from "../layout/LoginLayout";
// import Login from "../pages/Login/Login/Login";
// import ChefsDetails from "../pages/Home/ChefsDetails/ChefsDetails";


// const router = createBrowserRouter([
    
    
//     {
//         path: '/',
//         element: <Main></Main>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             {
//                path:'/chefDtails/:id',
//                element: <ChefsDetails></ChefsDetails>
//             },
//             {
//                 path: '/recipe/:id',
//                 element: <Recipe></Recipe>
//             }
//         ]
//     },
//     {
//         path: 'recipeDetails',
//         element: <RecipeLayout></RecipeLayout>,
//         children: [
//             {
//                 path: ':id',
//                 element: <RecipeDetails></RecipeDetails>,
//                 loader: ({ params }) => fetch(`http://localhost:5000/recipe/${params.id}`)
//             }
//         ]
//     },
   
// ])

// export default router;