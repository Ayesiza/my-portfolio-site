import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/ayesiza-hawah-339700185/">
          <FaInstagram className="icon" style={{color:"#DA9F11"}}  />
        </a>
        <a href="https://www.linkedin.com/in/ayesiza-hawah-339700185/">
          <FaLinkedin className="icon" style={{color:"#DA9F11"}}  />
        </a>
        <a href="https://github.com/Ayesiza">
          <FaGithub className="icon" style={{color:"#DA9F11"}}  />
        </a>
        <a href="https://twitter.com/hawayesiza">
          <FaTwitter className="icon" style={{color:"#DA9F11"}} />
        </a>
      </div>
      <p> &copy; 2022 yesiha@gmail.com</p>
    </div>
  );
}

export default Footer;
