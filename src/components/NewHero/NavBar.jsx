import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-dark text-white sticky top-0 z-50 ">
            <div className="container mx-auto flex justify-between items-center py-4 ">
                {/* Hamburger menu icon */}
                <div className="lg:hidden block mymenuclik" onClick={toggleMenu}>
                    <span className="glyphicon glyphicon-menu-hamburger text-2xl"></span>
                </div>

                {/* Menu items */}
                <div className={`lg:flex lg:items-center lg:space-x-6 mx-[60px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <a href="index.html" className="block lg:inline-block py-2 hover:text-gold">Home</a>
                    <a href="about.html" className="block lg:inline-block py-2 hover:text-gold">About</a>
                   
                    <a href="portfolio.html" className="block lg:inline-block py-2 hover:text-gold">Services</a>
                    <a href="contact.html" className="block lg:inline-block py-2 hover:text-gold">Contact</a>
                </div>

                {/* Get Appointment button */}
                <div className={`mr-[70px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <a
                        className="btn text-white px-4 py-2 rounded hover:border-gold hover:bg-gold"
                        href="https://freewebsitecode.com/law-firm-website-template"
                        style={{ border: "1px solid rgb(170 145 102)" }}
                    >
                        Get Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
