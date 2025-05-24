import ResponsiveNavbar from "../Pages/Navbar/Navbar";

import "../../Component/Layouts/index.css";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
const MainLayouts = () => {
  return (
    <div className="bg-[#F2F6FD]">
      <div className="container mx-auto py-5">
        <ResponsiveNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
