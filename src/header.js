import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

function Header() {
  const [toggle, setToggle] = useState(false);
  function toggleSideBar() {
    setToggle(!toggle);
  }

  // close sidebar on click outside
  document.body.onclick = function(e) {
    console.log(e.clientX);
    if (e.clientX > window.innerWidth * 0.8) {
      setToggle(false);
    }
  };

  return (
      <div>
    <header>
      <FaBars onClick={toggleSideBar} className="bar" />
      <div className="logo">Portfolio</div>
      <nav className={toggle ? "sidebar" : ""}>
        <ul>
          <Link to="/" onClick={toggleSideBar}>
            <li>Home</li>
          </Link>
          <Link to="about" onClick={toggleSideBar}>
            <li>About</li>
          </Link>
          <Link to="projects" onClick={toggleSideBar}>
            <li>Projects</li>
          </Link>
          <Link to="contact" onClick={toggleSideBar}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
<Outlet/>
<Projects />
<About/>
<Contact/>
    </div>
  );
}

export default Header;
