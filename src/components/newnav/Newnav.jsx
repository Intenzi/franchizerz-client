import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import BlogIcon from "@mui/icons-material/Article"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import Avatar from "@mui/material/Avatar"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import LogoutIcon from "@mui/icons-material/Logout"
import FranchizerzLogo from "../../assets/logo_1.svg"
import FranchizerzTitle from "../../assets/logo.svg"
import CloseIcon from "@mui/icons-material/Close" // Import Close Icon

import styles from "./newnav.module.css" 

const Newnav = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false) // State to track scrolling

	// Function to handle scrolling and toggle navbar class
	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		// Add event listener to window scroll
		window.addEventListener("scroll", handleScroll)
		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<div className={`${styles.new_nav} ${menuOpen ? styles.active : ""} ${scrolled ? styles.nav_scrolled : ""}`}>
			<div className={styles.nav_data}>
				<div className={styles.navlogo}>
					<NavLink to="/" className={styles.logoContainer}>
						<FranchizerzLogo className={styles.logoImage} />
						<FranchizerzTitle className={styles.logoTitle} />
					</NavLink>
				</div>
				<div className={`${styles.left_data} ${menuOpen ? styles.open : ""}`}>
					<NavLink to="/" className={styles.navItem}>
						<HomeIcon className={styles.navLogo} />
						<p className={styles.navText}>Home</p>
					</NavLink>
					<NavLink to="/about-us" className={styles.navItem}>
						<InfoIcon className={styles.navLogo} />
						<p className={styles.navText}>About Us</p>
					</NavLink>
					<NavLink to="/blog" className={styles.navItem}>
						<BlogIcon className={styles.navLogo} />
						<p className={styles.navText}>Blog</p>
					</NavLink>
					<NavLink to="/contact-us" className={styles.navItem}>
						<ContactMailIcon className={styles.navLogo} />
						<p className={styles.navText}>Contact Us</p>
					</NavLink>
				</div>
				<div className={styles.right_data}>
					<Avatar className={styles.avatar} onClick={handleMenuClick} />
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
						className={styles.menu}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
						<MenuItem onClick={handleMenuClose}>Login</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<LogoutIcon className={styles.logoutIcon} />
							Logout
						</MenuItem>
					</Menu>
					<div className={styles.hamburger} onClick={toggleMenu}>
						{menuOpen ? (
							<CloseIcon style={{ color: "#ecf0f1" }} /> // Show Close Icon if menu is open
						) : (
							<>
								<div></div>
								<div></div>
								<div></div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Newnav
