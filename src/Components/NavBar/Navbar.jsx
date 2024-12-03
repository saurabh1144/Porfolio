import React from "react";
import "./Navbar.css";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Navbar = () => {
  return (
  
      <nav className="navbar">
        <h6 className="port">Portfolio</h6>
        <div className="menu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menuList"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="menuList"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="menuList"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menuList"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="exp"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className="menuList"
          >
            Experience
          </Link>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="menuBtn"
          onClick={()=>{
            document.getElementById('contactpage').scrollIntoView({behavior:'smooth'});
          }}
        >
          <img src={contact} alt="" className="menuImg" />
          Contact Me
        </motion.button>
      </nav>
   
  );
};

export default Navbar;
