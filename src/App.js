import React from "react";
import {  Route, Routes, } from "react-router-dom";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import "./styles.css";
import "./home.css";
import "./aye_optimized.png";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Header/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>

    </div>
  );
}

const Home = () => {
  const imagePath = "url(" + require("./profile3.jpg") + ")";
  return (
    <div className="hero">
      <div className="image" style={{ backgroundImage: imagePath }} />
      <h1>Md Furqaan</h1>
      <p>| Front End Software Developer |</p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/ayesiza-hawah-339700185/">
          {/* <i className="fa fa-2x fa-instagram" /> */}
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ayesiza-hawah-339700185/">
          {/* <i className="fa fa-2x fa-facebook" /> */}
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Ayesiza">
          {/* <i className="fa fa-2x fa-github" /> */}
          <FaGithub className="icon" />
        </a>
        <a href="https://twitter.com/hawayesiza">
          {/* <i className="fa fa-2x fa-twitter" /> */}
          <FaTwitter className="icon" />
        </a>
      </div>
    </div>
  );
};
