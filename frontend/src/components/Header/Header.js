import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaBars } from "react-icons/fa"

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=> {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <nav>
        <div className='container'>
            <Link to='/'>
                <img src="/images/logo_magnify.png" alt='' width="188"/>  
            </Link>
            
        
            <ul className= {isOpen ? "nav-link active" : "nav-link"}>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/Us'>A propos de nous</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
            <div className='icon' onClick={toggleMenu}>
                <FaBars/>
            </div>
        </div>
    </nav>
    </>
  );
}

export default Header;
