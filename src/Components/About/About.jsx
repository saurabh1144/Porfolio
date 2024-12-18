import React, { useEffect } from "react";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa6";
import myimg from "../../assets/myimg1.png";
import { MdOutlineFileDownload } from "react-icons/md";
// import { motion} from "motion/react";
import Aos from "aos";


const About = () => {
    useEffect(()=>{
        Aos.init();
    },[])


  return (
    <section className="about"  data-aos="zoom-in">
      <h2 className="heading">About Me</h2>
      <span className="headpara">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </span>
      <div className="row imgcol">
        <div className="col-lg-5 col-md-6 col-sm-12 ">
          <div className="aboutintro"
          >
            <img src={myimg} alt="myimg" className="image" />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 ">
          <div className="aboutskill">
            <p data-aos="fade-left" className="aboutpara">
              Greetings! I'm <b>Saurabh Chouragade</b>, a dedicated software
              engineer located in India. My expertise spans TypeScript,
              JavaScript, Node.js, React.js, and Next.js, encompassing both
              frontend and backend development.
            </p>
            <h4 data-aos="fade-left" className="badge bg-warning text-dark educationhead">Education</h4>
            <ul data-aos="fade-left" className="education">
              <li className="listitem">
                <FaGraduationCap /> Masters Of Computer Applications(MCA)
              </li>
              <label className="collegepg">
                Shree RamdeoBaba College of Engineering and Management Nagpur
                (RCOEM)
              </label>
              <li className="listitem">
                <FaGraduationCap /> Bachelors Of Science (Computer Science)
              </li>
              <label className="collegepg">
                Dhote Bhandhu Science College Gondia (M.H)
              </label>
            </ul>
          </div>
          <a className="resumeBtn" href="../../assets/resume.pdf" download='Saurabh_Resume.pdf'><MdOutlineFileDownload className="down"/>Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
