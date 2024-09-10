import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css';
import FranchizerzLogo from "../../assets/logo_1.svg";
import FranchizerzTitle from "../../assets/logo.svg";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        // Removed the code that prevents body scroll
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // Removed the code that restores body scroll
    };

    return (
        <header>
            <nav>
                <div className="navlogo">
                    <NavLink to="/" className="logoContainer">
                        <FranchizerzLogo className="logoImage" />
                        <FranchizerzTitle className="logoTitle" />
                    </NavLink>
                </div>
                <div className="nav_searchbaar">
                    <input
                        type="text"
                        placeholder="Search Your Products"
                        className="searchInput"
                    />
                    <div className="search_icon">
                        <SearchIcon className="searchIcon" />
                    </div>
                </div>
                <div className="right">
                    <Avatar
                        className="avatar"
                        onClick={handleMenuClick}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        className="menu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <LogoutIcon className="logoutIcon" />
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
