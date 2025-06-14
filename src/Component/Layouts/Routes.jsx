import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts";
import Register from "../SocialShare/Register";
import Login from "../SocialShare/Login";

import FavouriteDetails from "../Pages/BodyContent/FavouriteDetails";

import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import JobApply from "../Pages/BodyContent/JobApply";
import MyJob from "../Pages/Home/MyJob";
import AddJob from "../Pages/Pages/AddJob";
import MyJobPost from "../Pages/Pages/MyJobPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
       {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><FavouriteDetails /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      
      },
      {
        path: "/job_apply/:id",
        element: <PrivateRoutes><JobApply /></PrivateRoutes>
      },
      {
        path: "/my_jobs",
        element: <PrivateRoutes><MyJob /></PrivateRoutes>
      },
      {
        path: "/add_job",
        element: <PrivateRoutes><AddJob /></PrivateRoutes>
      },
      {
        path: "/my_post_job",
        element: <PrivateRoutes><MyJobPost /></PrivateRoutes>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
