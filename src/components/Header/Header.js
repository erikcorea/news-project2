import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './newsImage.png';

const Header = () => {
    return (
        <nav>
            <img src={Logo} alt="news-logo" id="header-logo" />
            <ul>
                <li>
                    <Link className="nav-tags" to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                </li>
                <li>
                    <Link className="nav-tags" to="/about" style={{textDecoration: 'none', color: 'black'}}>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;