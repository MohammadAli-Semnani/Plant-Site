import React from "react";
import {Link} from "react-router-dom";
import logo from "../Images/logo.png";
import styles from "../styles/Logo.module.css";
const Logo = () => {
  return (
    <div>
      <div className={styles.logoContainer}>
        <Link className={styles.LinkContainer} to="/">
          <span className={styles.logoText}> Flower Dance</span>
          <img alt="logo" src={logo} className={styles.logoImg} />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
