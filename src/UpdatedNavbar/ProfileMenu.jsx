import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login as LoginIcon, PersonAdd as SignUpIcon } from "@mui/icons-material";
import Profile from "../assets/profile.svg";
import ArrowDown from "../assets/arrowdown.svg";
import styles from "./NavBar.module.css";

const ProfileMenu = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <div className={styles.profileContainer} onClick={handleDropdownToggle}>
            <Profile />
            <ArrowDown className={styles.arrowdownLogo} />
            {isProfileMenuOpen && (
                <div className={styles.dropdownModal}>
                    <NavLink to="/sign-in" className={styles.dropdownLink}>
                        <LoginIcon className={styles.dropdownIcon} />
                        Sign In
                    </NavLink>
                    <NavLink to="/sign-up" className={styles.dropdownLink}>
                        <SignUpIcon className={styles.dropdownIcon} />
                        Sign Up
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
