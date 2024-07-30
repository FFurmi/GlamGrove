import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Layout from './component/layout/Layout.jsx';
import About from './component/about/About.jsx';
import Services from './component/services/Services.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './component/contact/Contact.jsx';
import Portfolio from './component/portfolio/Portfolio.jsx';
import Login from './component/login/Login.jsx';
import UserProvider from './component/userProvider/UserProvider.jsx';
import User from './component/user/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'about',
        element:<About></About>, 
        loader: ()=>fetch('aboutMe.json')
      },
      {
        path:'services',
        element:<Services></Services>,
        loader:()=>fetch('services.json')
      },
      {
        path:'portfolio',
        element: <Portfolio></Portfolio>,
        loader:()=>fetch('portfolio.json')
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'user',
        element:<User></User>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
