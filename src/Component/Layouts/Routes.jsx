import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "./MainLayouts";
import Banner from "../Pages/Banner/Banner";
import Register from "../SocialShare/Register";
import Login from "../SocialShare/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
     children: [
      {
        path: "/",
        element: <Banner />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
     ]
  },
]);

export default router;