import React, { useEffect } from "react";
import "./intro.css";
// import { Link } from "react-scroll";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";


// import down from "../../assets/downlaod.png";
import banner from "../../assets/undraw.svg"


const Intro = () => {
  useEffect(() => {
    var app = document.getElementById("app");

    var typewriter = new Typewriter(app, {
      loop: true,
    });

    typewriter
      .typeString("Web Developer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("React Js")
      .pauseFor(2000)
      .deleteAll()
      .typeString("<strong>FrontEnd Developer</strong>")
      .pauseFor(2000)
      .start();
  }, []);

  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm
          <span className="introName">Saurabh </span>
          <br />
          <span id="app">Frontend Developer</span>
          <p className="introPara">
            I am a skilled Web Developer with experience in creating <br />
            visually appealing and user friendly websites.
          </p>
          <div className="social">
         <a className="link" href='https://github.com/saurabh1144' target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Github"><span><FaGithub/></span></a> 
         <a className="link" href="https://linkedin.com/in/saurabh-chouragade-8658631b1 " target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><span><FaLinkedin/></span></a>
         <a className="link" href="mailto:saurabhchouragade72@gmail.com" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="top" title="Gmail"><span><SiGmail /></span></a>
            

          </div>
          
            {/* <button className="butn">
              <img src={down} alt="icon" className="icon" />
              Resume
            </button> */}
         
        </span>
      </div>
      <img src={banner} alt="img" className="myImg" />
    </section>
  );
};

export default Intro;
