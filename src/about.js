import React from "react";
import "./about.css";
import { ReactComponent as IconReact } from "./images/react.svg";

import { ReactComponent as IconHtml } from "./images/html.svg";

import { ReactComponent as IconCss } from "./images/css.svg";

import { ReactComponent as IconJs } from "./images/js.svg";

function About() {
  const imagePath = "url(" + require("./images/profile3.jpg") + ")";
  return (
    <div className="about-container">
      <div className="about">
        <div className="image" style={{ backgroundImage: imagePath }} />
        <h1>About:</h1>
        <div className="paragraph">
        <p>
          I am Software Engineer, with three years of experience in website and
          software development. I am technically proficient, easy to work with
          and I do not stop till its perfect. Ever since I got into the field I
          really enjoy software development , Especially front-end Sites.But I also have full knowlegde on nodejs.
          I have created many  projects and I have solved real world
          problems. 
        </p>
        </div>
      </div>
      <h1>Skills:</h1>
      <div className="skills">
        <IconHtml className="skill-icon" />
        <IconCss className="skill-icon" />
        <IconJs className="skill-icon" />
        <IconReact className="skill-icon" />
      </div>
    </div>
  );
}

export default About;
