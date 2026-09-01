import { RiArrowGoForwardFill } from "@remixicon/react";
import React from "react";
import cpp from "../../assets/cpp.png";
import css from "../../assets/css.png";
import express from "../../assets/express-js.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import mongodb from "../../assets/mongodb.png";
import nodejs from "../../assets/nodejs.png";
import reactj from "../../assets/react-js.png";
import dsa from "../../assets/dsa.png";



const About = () => {
  return (
    <div id="about" className="text-white md-flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Me</h1>
      <div>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-10 justify-between">
          <div className="grid grid-cols-3 gap-4 lg:gap-2 w-full md:w-1/2 lg:w-1/3 ">
            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={mongodb}  className="border rounded-full" alt="mongodb" />
            </div>

            <div className="w-30 h-30 object-contain  transition-transform duration-300 hover:scale-110 mt-5">
              <img src={express} className="border rounded-full" alt="express" />
            </div>

            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5" >
                <img src={reactj} className="border rounded-full" alt="reactj" />
            </div>

            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={nodejs} className="border rounded-full" alt="node" />
            </div>

            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={html} className="border rounded-full" alt="html"/>
            </div>

            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={css} className="border rounded-full" alt="css" />
            </div>

            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={js} className="border rounded-full" alt="js" />
            </div>
            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={cpp} className="border rounded-full" alt="cpp" />
            </div>
            <div className="w-30 h-30 object-contain transition-transform duration-300 hover:scale-110 mt-5">
              <img src={dsa} className="border rounded-full" alt="dsa" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:1/2 p-3 md:mt-15 lg:mt-5">
                
                <p className="text-xl mt-5">I’m a Full-Stack Developer with a strong interest in building responsive and user-friendly web applications.</p>
                <br />
                <p className="text-xl">I work with technologies including React, JavaScript, Node.js, Express, MongoDB and C++(DSA). I enjoy working on both frontend and backend to understand how a complete application comes together.</p>
                <br />
                <p className="text-xl">I’m continuously improving my development and problem-solving skills by working on practical projects and exploring new technologies.</p>
                <br />
                <p className="text-xl">My goal is to write clean code, build useful websites, and keep improving as a developer.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
