// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../stylesheets/navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="logo-brand">
//             <NavLink to="/">
//               <img src="/images/logo.png" alt="page logo" width="200" />
//             </NavLink>
//           </div>

//           <nav>
//             <ul>
//               <li>
//                 <NavLink className="nav-tag" to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink className="nav-tag" to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink className="nav-tag" to="/notes">Notes</NavLink>
//               </li>
//               <li>
//                 <NavLink className="nav-tag" to="/contact">Contact</NavLink>
//               </li>
//               <li>
//                 <NavLink className="nav-tag" to="/register">Register</NavLink>
//               </li>
//               <li>
//                 <NavLink className="nav-tag" to="/login">Login</NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <img src="/images/logo.png" alt="page logo" width="200" />
            </NavLink>
          </div>

          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink className="nav-tag" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-tag" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-tag" to="/notes">
                  Notes
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-tag" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-tag" to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-tag" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
