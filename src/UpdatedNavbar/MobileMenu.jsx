import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../assets/home.svg";
import About from "../assets/AboutUs.svg";
import Blog from "../assets/blog.svg";
import ContactUs from "../assets/contactUs.svg";
import Franchises from "../assets/franchises.svg";
import WishList from "../assets/wishlist.svg";
import styles from "./NavBar.module.css";

const MobileMenu = ({ closeMenu }) => (
    <div className={styles.mobileMenu}>
        {[
            { to: "/", icon: Home, text: "Home" },
            { to: "/about", icon: About, text: "About Us" },
            { to: "/blog", icon: Blog, text: "Blog" },
            { to: "/contact-us", icon: ContactUs, text: "Contact Us" },
            { to: "/partner-with-us", icon: Franchises, text: "Franchises" },
            { to: "/wishlist", icon: WishList, text: "WishLists" }
        ].map(({ to, icon: Icon, text }) => (
            <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                    isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                }
                onClick={closeMenu}
            >
                <Icon className={styles.navLogo} />
                <p className={styles.navText}>{text}</p>
            </NavLink>
        ))}
    </div>
);

export default MobileMenu;
