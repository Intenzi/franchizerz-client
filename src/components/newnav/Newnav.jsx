import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BlogIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person"; // User icon import
import FranchizerzLogo from "../../assets/logo_1.svg";
import FranchizerzTitle from "../../assets/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import "./newnav.css"; // CSS for styling
import { useAuthStore } from "../../store/authStore"; // Assuming you are using a global store

const Newnav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore(); // Global auth state and logout function
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    if (loggedIn) {
      // Set authenticated state
    }
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout(); // Calling global store's logout action or custom logout function
    localStorage.removeItem("isAuthenticated"); // Clear auth info from local storage
    navigate("/login"); // Redirect to login page
    handleMenuClose();
  };

  const handleProfileClick = () => {
    navigate("/dashboard"); // Navigate to dashboard on profile click
    handleMenuClose();
  };

  return (
    <div className={`new_nav ${menuOpen ? "active" : ""}`}>
      <div className="nav_data">
        <div className="navlogo">
          
          <NavLink to="/" className="logoContainer">
  <FranchizerzLogo className="logoImage w-[45px] sm:w-[60px] md:w-[75px] lg:w-[90px] text-white" />
  <FranchizerzTitle className="logoTitle w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px]" />
</NavLink>

        </div>

        {/* Conditional rendering based on authentication and screen size */}
        <div className={`left_data ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="navItem">
            {/* <HomeIcon className="navLogo" /> */}
            <p className="navText">Home</p>
          </NavLink>
          <NavLink to="/about" className="navItem">
            {/* <InfoIcon className="navLogo" /> */}
            <p className="navText">About Us</p>
          </NavLink>
          <NavLink to="/blog" className="navItem">
            {/* <BlogIcon className="navLogo" /> */}
            <p className="navText">Blog</p>
          </NavLink>
          <NavLink to="/contact-us" className="navItem">
            {/* <ContactMailIcon className="navLogo" /> */}
            <p className="navText">Contact Us</p>
          </NavLink>
          <NavLink to="/franchises" className="navItem">
            {/* <WorkIcon className="navLogo" /> */}
            <p className="navText">Franchises</p>
          </NavLink>
          <NavLink to="/wishlist" className="navItem">
            {/* <FavoriteIcon className="navLogo" /> */}
            <p className="navText">WishLists</p>
          </NavLink>
        </div>

        <div className="right_data">
          {/* Show Login if not authenticated */}
          {!isAuthenticated ? (
            <NavLink to="/login" className="navItem auth_buttons">
              {/* <PersonIcon className="userIcon navLogo" /> */}
              <p className="navText">Login</p>
            </NavLink>
          ) : (
            <>
              <div className="profile_container" onClick={handleMenuClick}>
                <Avatar className="avatar" />
              </div>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                className="menu"
              >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon className="logoutIcon" />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon style={{ color: "#ecf0f1" }} />
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
  );
};

export default Newnav;
