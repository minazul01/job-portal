// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import NewContext from "../../Firebase/Context/CreateContext";
import Logo from "/assets/navLogo.png"

const Navbar = () => {
  const { user, logOut } = useContext(NewContext);
console.log(user)
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg font-medium gap-3 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink>
              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                Home
              </li>
            </NavLink>
            <NavLink>
              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                Job
              </li>
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl lg:text-5xl text-[#3C65F5] font-bold flex items-center">
        <img src={Logo} alt="" />
          Job portals
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-normal gap-8">
          <NavLink>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Home
            </li>
          </NavLink>
          <NavLink>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Job
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={logOut} className="text-xl font-medium p-3 bg-[#3C65F5] rounded-lg cursor-pointer hover:bg-gray-200">Logout</button>
        ) : (
          <>
          <Link to="/register" className="text-xl font-medium p-3 bg-[#3C65F5] rounded-lg cursor-pointer hover:bg-gray-200">
            Register
          </Link>
          <Link to="/login" className="text-xl font-medium p-3 ml-7 bg-[#3C65F5] rounded-lg cursor-pointer hover:bg-gray-200">
            Login
          </Link>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
