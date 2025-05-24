import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Component/Layouts/index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Component/Layouts/Routes.jsx";
import Context from "./Component/Firebase/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>
);
