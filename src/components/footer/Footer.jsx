import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footerContainer">
            <div >
                <h2 className='footerTitle'>Weather Lens</h2>
                <p className="footerSubtitle">A Weather Condition Providing Platform.</p>
            </div>
            <div className="footerLink">
                <ul className="footerMenu">
                    <li className="footerMenuItem"><a href="/" className="footerLink">Home</a></li>
                    <li className="footerMenuItem"><a href="/" className="footerLink">Weather</a></li>
                    <li className="footerMenuItem"><a href="#about" className="footerLink">About</a></li>
                    <li className="footerMenuItem"><a href="#contact" className="footerLink">Contact</a></li>
                </ul>
            </div>
            <div className="footerSocials">
            <a href="https://github.com/sudhanshu287" target='_blank'><i class="ri-github-line footerIcon"></i></a>
            <a href="https://www.linkedin.com/in/sudhanshu123/" target='_blank'><i class="ri-linkedin-fill footerIcon"></i></a>
            <a href="https://www.instagram.com/_sdn_patel_dev/" target='_blank'><i class="ri-instagram-line footerIcon"></i></a>
            </div>
        </div>
        <div className="footerCopyright">
        <p>&#169; copyright 2023 All rights reserved. Made with &#10084;&#65039; By <a href="https://sudhanshu-portfolio-sdn.netlify.app/" target="__blank">Sudhanshu
                    Patel</a>.</p>
        </div>
    </footer>
  )
}

export default Footer;