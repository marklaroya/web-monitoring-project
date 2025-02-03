import React, { useState } from 'react';
import './NavBar.css';

interface NavBarProps {
    onSelectProvider: (provider: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectProvider }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <div className="navbar-title">
                    Data Monitoring
                </div>
            </div>
            <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
                <li className="navbar-item"><a href="#smart" onClick={() => onSelectProvider('SMART')}>SMART</a></li>
                <li className="navbar-item"><a href="#dito" onClick={() => onSelectProvider('DITO')}>DITO</a></li>
                <li className="navbar-item"><a href="#globe" onClick={() => onSelectProvider('GLOBE')}>GLOBE</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;