import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import router from './routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails/RecipeDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Error from './pages/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path:'/recipeDetails/:id',
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://bong-eats-server-sumaiyaak.vercel.app/recipes/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/*',
        element: <Error></Error>
      }
    ]
  }
])











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
