import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedinIn,
    FaVimeoV
  } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer-container">
           <section className="footer-grid">
                <div className="footer-grid-item">
                    <ul>
                        <li><a href='/'>Build Software</a></li>
                        <li><a href='/'>Design Different</a></li>
                        <li><a href='/'>Apply Your Knowledge</a></li>
                        <li><a href='/'>Faq</a></li>
                    </ul>
                </div>
                <div className="footer-grid-item">
                    <p>Our Local Center: Kilometer 7, Enugu/Port
                        Harcourt, Expressway, Centenary City, Enugu,
                        Nigeria.
                    </p>
                    <p><a href="/"> GET IN TOUCH</a></p>
                </div>
                <div className="footer-grid-item">
                    <img src="./footerimage.png" />
                    <p>Learnable is proud to be a collaborative effort 
                    of all the arms of our product team <p><a href="/">HEAD TO DEVSTUDIO</a></p></p>
                </div>
           </section>
           <section className="footer-links">
           <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Linkedin'
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Vimeo'
            >
              <FaVimeoV />
            </Link>
           </section>
           <section className="footer-foot">&copy; GENESYS 2020  <span>PRIVACY STATEMENT</span></section>
        </div>
    )
}

export default Footer
