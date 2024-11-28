import React, { useEffect } from "react";
import "./intro.css";
import { Link } from "react-scroll";

import down from "../../assets/downlaod.png";
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
          <span className="introName"> Saurabh </span>
          <br />
          <span id="app">Frontend Developer</span>
          <p className="introPara">
            I am a skilled Web Developer with experience in creating <br />
            visually appealing and user friendly websites.
          </p>
          <Link>
            {" "}
            <button className="btn">
              <img src={down} alt="icon" className="icon" />
              Resume
            </button>
          </Link>
        </span>
      </div>
      <img src={banner} alt="img" className="myImg" />
    </section>
  );
};

export default Intro;
