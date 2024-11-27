import React from 'react'
import './Navbar.css';
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll';

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
        <button className='menuBtn'>
        <img src={contact} alt='' className='menuImg'/>Contact Me</button>

      </nav>
    </div>
  )
}

export default Navbar
