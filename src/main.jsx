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


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
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
