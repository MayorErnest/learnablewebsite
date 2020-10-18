import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <img src="./genesysicon.png" alt="Genesyss" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/learnable' className='nav-links' onClick={closeMobileMenu}>
                                Learnable
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Agora
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Startzone
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link to='/' className='nav-end nav-links' onClick={closeMobileMenu}>
                        build a product with <span>devstudio</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
