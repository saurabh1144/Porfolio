import React from "react";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa6";
import myimg from '../../assets/abc.png'


const About = () => {
  return (
    <section className="about">
      <h2 className="heading">About Me</h2>
      <span className="headpara">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </span>
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="aboutintro">
          <img src={myimg} alt="myimg" className="image"/>
         
              
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12">
        <div className="aboutskill">
        <p className="aboutpara">Greetings! I'm <b>Saurabh Chouragade</b>, a dedicated software engineer located in India. My expertise spans TypeScript, JavaScript, Node.js, React.js, and Next.js, encompassing both frontend and backend development.</p>
        <h4>Education</h4>
        <ul className="education">
            <li className="listitem"><FaGraduationCap/> Master Of Computer Applications(MCA) 2023</li>
                 <label className="collegepg">Shree RamdeoBaba College of Engineering and Management Nagpur (RCOEM)</label>
                 <li className="listitem"><FaGraduationCap/> Bachelors Of Science (Computer Science) 2019</li>
                 <label className="collegepg">Dhote Bhandhu Science College Gondia (M.H)</label>
        </ul>


        </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
