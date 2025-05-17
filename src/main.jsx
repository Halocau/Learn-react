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
import BookPage from './pages/book.jsx';
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp /> // phần ko cần phải kế thừa path
      },
      {
        path: "/users",
        element: <div><UsersPage /></div>,
      },
      {
        path: "/books",
        element: <div><BookPage /></div>,
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
