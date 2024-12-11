import React, { useState } from "react";
import "./Navbar.css";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [show , setShow]=useState(false);
  return (
    <nav className="navbar">
     <Link to="intro"> <h6 className="port">&lt;Saurabh/&gt;</h6></Link>
      <div className="menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-80}
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
          offset={-150}
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
          offset={-100}
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
        onClick={() => {
          document
            .getElementById("contactpage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="" className="menuImg" />
        Contact Me
      </motion.button>
      
      {/* Mobile menu */}


        <img src={menu} className="menuimage" alt="menu" onClick={()=>setShow(!show)} />
      <div className="mobMenu" style={{display:show? 'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}

        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}
        >
          Experience
        </Link>

        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobList"
          onClick={()=>setShow(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
