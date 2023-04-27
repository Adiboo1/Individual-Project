import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { logoWhite, close, menu } from "../assets";

// Component on every page, allowing the user to navigate around the site, this changes format depending on the reslution of the user's device
const Navbar = () => {
  // Variable to state which page is currently open
  const [active, setActive] = useState("Home");
  
  // Variable for the mobile formatting, in order to open and close the menu
  const [toggle, setToggle] = useState(false);

  // Variables holding styling for the text depending on whether it is active or not
  const activeLink = 'font-poppins font-normal cursor-pointer text-[16px] text-white opacity-100';
  const normalLink = 'font-poppins font-normal cursor-pointer text-[16px] text-white opacity-80';

  return (
    <nav className="w-full flex py-6 items-center justify-between marginX">
      {/* Logo, which acts as a link to the landing page */}
      <Link to="/Home">
        <img src={logoWhite} alt="Figured-Out Finance" className="h-[32px] opacity-80" onClick={() => setToggle(!toggle)}/>
      </Link>

      {/* List of the navigation bar options, each linking to the corresponding page */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="mr-10">
          <Link to="/Education" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Education</Link>
        </li>
        <li className="mr-10">
          <Link to="/Analysis" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Analysis</Link>
        </li>
        <li className="mr-10">
          <Link to="/Portfolio" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Portfolio</Link>
        </li>
        <li className="mr-10">
          <Link to="/Contact" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</Link>
        </li>
        
        {/* Placeholder button, which will allow users to sign in with future developemt */}
        <Link to="/Signin">
          <button type="button" className="py-[6px] px-4 bg-blue-gradient rounded-[10px]">
            <p className="font-poppins font-medium cursor-pointer text-[16px] text-black">Sign in</p>
          </button>
        </Link>
      </ul>

      {/* Button for the mobile platforms, allowing the user to open the navigation menu and close it */}
      <div className="sm:hidden flex flex-1 justify-end items-center gap-8">
      <Link to="/Signin">
        <button type="button" className="sm:ml-10 py-[4px] sm:py-[6px] px-4 bg-blue-gradient rounded-[10px]">
          <p className="font-poppins font-medium cursor-pointer text-[14px] sm:text-[16px] text-black">Sign in</p>
        </button>
      </Link>
        
        {/* Image for the menu icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* List of the navigation menu options, each linking to the corresponding page for mobile platforms */}
        <div className={`${ !toggle ? "hidden" : "flex" } p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[100px] rounded-xl sidebar`} >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            <li>
              <Link to="/Education" onClick={() => { setToggle(!toggle); setActive("Education"); }} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Education</Link>
            </li>
            <li>
              <Link to="/Analysis" onClick={() => { setToggle(!toggle); setActive("Analysis"); }} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Analysis</Link>
            </li>
            <li>
              <Link to="/Portfolio" onClick={() => { setToggle(!toggle); setActive("Portfolio"); }} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={() => { setToggle(!toggle); setActive("Contact"); }} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
