import React, { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [openNav,setOpenNav]=useState(false);
    const [theme,setTheme]=useState(false);
    
  return (
    
    <header className='header' >
        <nav className='container nav'>
        <a href="/" className="navLogo"><strong>Weather Lens</strong></a>
        <div className={openNav ? "navMenu open":"navMenu"}>
            <ul className="navList grid">
                <li className="navListItem"><a href="/" className='navLink'>Home</a></li>
                <li className="navListItem"><a href="/" className='navLink'>Weather</a></li>
                <li className="navListItem"><a href="#about" className='navLink'>About</a></li>
                <li className="navListItem"><a href="#contact" className='navLink'>Contact</a></li>
            </ul>
        </div>
        <div className="navButtons">

        <i class="ri-moon-line themeIcon" onClick={()=>{setTheme(!theme)}} ></i>
        <div className="navToggle">
        <i className={!openNav?"ri-menu-4-line navIcon":"ri-close-fill navIcon"} onClick={()=>setOpenNav(!openNav)}></i>
        </div>
        </div>
    </nav>
    </header>
  )
}

export default Navbar