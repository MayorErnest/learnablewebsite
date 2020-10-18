import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import './LearnableNavbar.css';

function LearnableNavbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navbarL">
                <div className="navbar-containerL containerL">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menuL active' : 'nav-menuL'}>
                        <li className="nav-itemL">
                            <Link to='/learnable' className='nav-linksL' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-itemL">
                            <Link to='/softwaredeveloper' className='nav-linksL' onClick={closeMobileMenu}>
                                SOFTWARE DEVELOPERS
                            </Link>
                        </li>
                        <li className="nav-itemL">
                            <Link to='/productdesigner' className='nav-linksL' onClick={closeMobileMenu}>
                                PRODUCT DESIGNERS
                            </Link>
                        </li>
                        <li className="nav-itemL">
                            <Link to='/' className='nav-linksL' onClick={closeMobileMenu}>
                                APPLY
                            </Link>
                        </li>
                        <li className="nav-itemL">
                            <Link to='/' className='nav-linksL' onClick={closeMobileMenu}>
                                JOURNAL
                            </Link>
                        </li>
                        <li className="nav-itemL">
                            <Link to='/' className='nav-linksL' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LearnableNavbar;
