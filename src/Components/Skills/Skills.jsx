import React, { useEffect } from "react";
import "./Skills.css";
import reacticon from "../../assets/Reactlogo.png";
import jsicon from "../../assets/javascript.png";
import python from "../../assets/python.png";
import next from "../../assets/nextjs.png";
import node from '../../assets/nodejs.png'
import html from '../../assets/html.png'
import redux from '../../assets/redux.png'
import vscode from '../../assets/vscode.png'
import tailwind from '../../assets/tailwind.png'
import css from '../../assets/css3.png'
import boot from '../../assets/bootstrap.png'
import netlify from '../../assets/netlify.png'
import Aos from "aos";



const Skills = () => {

    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <section className="skill"  data-aos="zoom-in">
      <label className="myskill">My Skills </label>
     {/* First Row starts */}
      <div className="row iconstyle" data-aos="fade-right">  
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className=" box">
            <img src={reacticon} alt="React Icon" className="icon px-3" />
            <div className="px-3 fs-3">React JS</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={jsicon} alt="jsicon" className="icon" />
            <div className="px-2 fs-3">Javascript</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={python} alt="pythoncon" className="icon" />
            <div className="px-3 fs-3">Python</div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={next} alt="pythoncon" className="icon bg-light" />
            <div className="px-3 fs-3">Next Js</div>
          </div>
        </div>
      </div>

        {/* Second Row starts */}
      <div className="row iconstyle" data-aos="fade-left">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className=" box">
            <img src={node} alt="React Icon" className="icon px-2 bg-light" />
            <div className="px-3 fs-3">Node JS</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={redux} alt="jsicon" className="icon " />
            <div className="px-3 fs-3">Redux</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={html} alt="pythoncon" className="icon" />
            <div className="px-4 fs-3">Html 5</div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={css} alt="pythoncon" className="icon " />
            <div className="px-4 fs-3">CSS 3</div>
          </div>
        </div>
      </div>


       {/* Third Row starts */}
       <div className="row iconstyle" data-aos="fade-up-right">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className=" box">
            <img src={boot} alt="React Icon" className="icon px-2" />
            <div className="px-1 fs-3">Bootstrap </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={tailwind} alt="jsicon" className="icon " />
            <div className="px-4 fs-3">Tailwind</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={vscode} alt="pythoncon" className="icon" />
            <div className="px-2 fs-3">VS Code</div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <img src={netlify} alt="pythoncon" className="icon " />
            <div className="px-4 fs-3">Netlify</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
