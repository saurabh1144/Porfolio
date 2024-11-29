import React from 'react'
import './Navbar.css';
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h6 className='port'>Portfolio</h6>
        <div className='menu'>
        <Link className='menuList'>Home</Link>
        <Link className='menuList'>About</Link>
        <Link className='menuList'>Contact</Link>
        <Link className='menuList'>Projects</Link>

        </div>
        <motion.button
         whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
         className='menuBtn'>
        <img src={contact} alt='' className='menuImg'/>Contact Me</motion.button>

      </nav>
    </div>
  )
}

export default Navbar
