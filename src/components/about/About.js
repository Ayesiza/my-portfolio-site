import React from "react";
import "./about.css";
import { ReactComponent as IconReact } from "../../images/react.svg";

import { ReactComponent as IconHtml } from "../../images/html.svg";

import { ReactComponent as IconCss } from "../../images/css.svg";

import { ReactComponent as IconJs } from "../../images/js.svg";

import { ReactComponent as IconNode } from "../../images/nodejs-2.svg";

function About() {
  const imagePath = "url(" + require("../../images/profile3.jpg") + ")";
  return (
    <div className="about-container">
     
      <div className="about">
      <h1 style={{marginBottom:"15px"}}>About Me:</h1>
        <div className="image" style={{ backgroundImage: imagePath }} />
        
        <div className="para" >
        <p>
          I am Software Engineer, with three years of experience in website and
          software development. I am technically proficient, easy to work with
          and I do not stop till its perfect. Ever since I got into the field I
          really enjoy software development , Especially front-end Sites.
          But I also have full knowlegde on nodejs.
          I have created many  projects and I have solved real worldproblems. 
        </p>
        </div>
        <a href="./images/Ayesizahawa-Resume.pdf" download > <button className="dowlod">Download Resume</button> </a>
       
      </div>
      <h1>Skills:</h1>
      <div className="skills">
        <IconHtml className="skill-icon" />
        <IconCss className="skill-icon" />
        <IconJs className="skill-icon" />
        <IconReact className="skill-icon" />
        <IconNode className="skill-icon" style={{marginLeft:"5px"}} />
      </div>
    </div>
  );
}

export default About;
