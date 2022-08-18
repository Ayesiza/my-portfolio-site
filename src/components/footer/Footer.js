import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
        <FaLinkedin />
      </div>
      <p> &copy; 2022 yesiha@gmail.com</p>
    </div>
  );
}

export default Footer;
