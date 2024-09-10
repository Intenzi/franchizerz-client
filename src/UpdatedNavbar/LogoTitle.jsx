import React from "react";
import FranchizerzLogo from "../assets/logo_1.svg";
import FranchizerzTitle from "../assets/logo.svg";
import styles from "./NavBar.module.css";

const LogoTitle = () => (
    <div className={styles.logoTitle}>
        <div className={styles.logo}>
            <FranchizerzLogo />
        </div>
        <div className={styles.title}>
            <FranchizerzTitle />
        </div>
    </div>
);

export default LogoTitle;
