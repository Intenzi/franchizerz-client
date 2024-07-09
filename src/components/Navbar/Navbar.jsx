import React from "react"
import "./Navbar.css"
import HomeIcon from "@mui/icons-material/HomeOutlined"
import BookIcon from "@mui/icons-material/BookOutlined"
import CallIcon from "@mui/icons-material/CallOutlined"
import HandshakeIcon from "@mui/icons-material/HandshakeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import logo from "../../assets/logo.png"
// import Partnerwithus from '../../Partnerwithus/Partnerwithus';

const Navbar = () => {
	return (
		<section className="navbar">
			<div className="logo">
				{/* <img  src={logo}   className = 'logo-img' alt='logo' /> */}
				<h1>Franchizerz</h1>
				<h4>Your Own Partner</h4>
			</div>

			<ul>
				<li>
					<HomeIcon /> Home
				</li>
				<li>
					{" "}
					<BookIcon />
					Blogs{" "}
				</li>
				<li>
					{" "}
					<CallIcon />
					Contact Us
				</li>
				<li>
					{" "}
					<HandshakeIcon />{" "}
				</li>
			</ul>

			<div className="search-box">
				<input type="text" placeholder="Search" />
				<SearchOutlinedIcon />
			</div>

			<ul>
				<li>
					{" "}
					<LoginOutlinedIcon />
					Log In
				</li>
				<li>
					{" "}
					<FavoriteBorderOutlinedIcon />
					WishList
				</li>
			</ul>
		</section>
	)
}

export default Navbar
