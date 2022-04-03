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
      <h1>Hi, I am</h1>
      <h1>Ayesiza Hawah</h1>
      <h4>| Front End Software Developer |</h4>
      <div className="social-media">
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
    </div>
  );
};
