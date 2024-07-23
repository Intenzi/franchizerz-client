import React from "react"
import { Link } from "react-router-dom"
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

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        {/* <img src={logo} className='logo-img' alt='logo' /> */}
        <h1>Franchizerz</h1>
        <h4>Your Own Partner</h4>
      </div>

      <ul>
        <li>
          <Link to="/">
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to="/blogs">
            <BookIcon />
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact-us">
            <CallIcon />
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/partners">
            <HandshakeIcon />
            Partners
          </Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon />
      </div>

      <ul>
        <li>
          <Link to="/login">
            <LoginOutlinedIcon />
            Log In
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <FavoriteBorderOutlinedIcon />
            WishList
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Navbar
