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

import "./newnav.css" // CSS for styling

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
		<div className={`new_nav ${menuOpen ? "active" : ""} ${scrolled ? "nav_scrolled" : ""}`}>
			<div className="nav_data">
				<div className="navlogo">
					<NavLink to="/" className="logoContainer">
						<FranchizerzLogo className="logoImage" />
						<FranchizerzTitle className="logoTitle" />
					</NavLink>
				</div>
				<div className={`left_data ${menuOpen ? "open" : ""}`}>
					<NavLink to="/" className="navItem">
						<HomeIcon className="navLogo" />
						<p className="navText ">Home</p>
					</NavLink>
					<NavLink to="about-us" className="navItem">
						<InfoIcon className="navLogo" />
						<p className="navText">About Us</p>
					</NavLink>
					<NavLink to="/blog" className="navItem">
						<BlogIcon className="navLogo" />
						<p className="navText">Blog</p>
					</NavLink>
					<NavLink to="/contact-us" className="navItem">
						<ContactMailIcon className="navLogo" />
						<p className="navText">Contact Us</p>
					</NavLink>
				</div>
				<div className="right_data">
					<Avatar className="avatar" onClick={handleMenuClick} />
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
						className="menu"
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
							<LogoutIcon className="logoutIcon" />
							Logout
						</MenuItem>
					</Menu>
					<div className="hamburger" onClick={toggleMenu}>
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
