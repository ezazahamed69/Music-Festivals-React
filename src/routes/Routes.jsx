import {createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/Home/Shared/NavBar/AboutUs";
import ServiceDetailPage from "../pages/Home/Shared/LiftSideNav/ServiceDetailPage";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/ErrorPage/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children :[
        {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path : '/service/:id',
        element : <PrivateRoute><ServiceDetailPage></ServiceDetailPage></PrivateRoute>,
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
      // {
      //   path: "/programs",
      //   element:<Home></Home>
      // },
    ]
    },
  ]);

  export default router