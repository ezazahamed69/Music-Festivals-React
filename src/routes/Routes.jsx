import {createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/Home/Shared/NavBar/AboutUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children :[
        {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('news.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element:<AboutUs></AboutUs>
      },
    ]
    },
  ]);

  export default router