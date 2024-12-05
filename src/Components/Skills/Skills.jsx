import React, { useEffect } from "react";
import "./Skills.css";
import { RiReactjsFill,RiJavascriptLine,RiNextjsLine,RiTailwindCssFill   } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiRedux,SiNetlify, SiPostman  } from "react-icons/si";
import { FaNodeJs,FaAws  } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

// import reacticon from "../../assets/Reactlogo.png";
// import jsicon from "../../assets/javascript.png";
// import python from "../../assets/python.png";
// import next from "../../assets/nextjs.png";
// import node from '../../assets/nodejs.png'
// import html from '../../assets/html.png'
// import redux from '../../assets/redux.png'
// import vscode from '../../assets/vscode.png'
// import tailwind from '../../assets/tailwind.png'
// import css from '../../assets/css3.png'
// import boot from '../../assets/bootstrap.png'
// import netlify from '../../assets/netlify.png'
import Aos from "aos";



const Skills = () => {

    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <section className="skill"  data-aos="zoom-in">
      <label className="myskill">My Skills </label>

      <div className="box">
        <div className="skillsets" >
            <span className="skillset"><RiReactjsFill className="reacticon"/>React Js</span>
            <span className="skillset"><RiJavascriptLine className="reacticon"/>Javascript</span>
            <span className="skillset"><RiNextjsLine className="reacticon"/>Next Js</span>
            <span className="skillset"><SiRedux className="reacticon"/>Redux</span>
            <span className="skillset"><FaNodeJs className="reacticon" />NodeJs</span>
            

            </div>
        <div className="skillsets">
            <span className="skillset"><AiOutlinePython className="reacticon" />Python</span>
            <span className="skillset"><DiDjango className="reacticon"/>Django</span>
            <span className="skillset"><TiHtml5 className="reacticon" />HTML 5</span>
            <span className="skillset"><IoLogoCss3 className="reacticon"/>Css 3</span>

        </div>
        <div className="skillsets">
        <span className="skillset"><BsBootstrap className="reacticon"/>Bootstrap 5</span>
        <span className="skillset"><RiTailwindCssFill className="reacticon"/>Tailwind</span>
        <span className="skillset"><FaAws className="reacticon"/>Aws Amplify</span>
        </div>
        <div className="skillsets">
        <span className="skillset"><TbBrandVscode className="reacticon"/>Vs Code</span>
        <span className="skillset"><SiNetlify className="reacticon"/>Netlify</span>
        <span className="skillset"><SiPostman className="reacticon"/>Postman</span>



        </div>
         
        
      </div>
    </section>
  );
};

export default Skills;
