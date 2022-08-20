import React from "react";

// import img
import Image from "../assets/img/me.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Ayesiza Hawah
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I'm a Software Engineer who is passionate about making
                applications and any kind of website with 100% client
                satisfaction. I have a passion for learning and sharing my
                knowledge with others as publicly as possible. I love to solve
                real-world problems. I am strategic, goal-oriented, and always
                work with an end goal in mind. Over the past 3 years, I pride
                myself on doing quality work and maintaining excellent
                communication.  <br />
                <br />
                I enjoy working with ReactJS, Nodejs, Redux,
                JavaScript as well as HTML and CSS,
              </p>
            </div>
            <a href="../assets/images/AyesizaHawaResume.pdf" download > 
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
