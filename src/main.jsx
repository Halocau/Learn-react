import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
//create router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/user.jsx';
import ProductPage from './pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    children: [
      {
        path: "/users",
        element: <div><UsersPage /></div>,
      },
      {
        path: "/products",
        element: <div><ProductPage /></div>,
      }
    ]
  },
  {
    path: "/login",
    element: <div><LoginPage /></div>,
  },
  {
    path: "/register",
    element: <div><RegisterPage /></div>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
