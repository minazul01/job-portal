import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "./MainLayouts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />
  },
]);

export default router;