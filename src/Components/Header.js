import React from 'react';
import styles from "../styles/Header.module.css"
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <div className={styles.listContainer}>
            <ul className={styles.listItem}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/gift">Gift</Link>
              </li>
              <li>
                <Link to="/signup">SingUp</Link>
              </li>
            </ul>
          </div>
          {/* <div className={styles.logoContainer}>
            <Link to="/">
              <img alt="logo" src={logo} className={styles.logoImg} />
            </Link>
          </div> */}
          <span className={styles.sentence}>
            "You Can <br />
            <span className={styles.diferent}>Plant</span>
            <span className={styles.diferent2}>A Dream"</span>
          </span>
        </header>
      </div>
    );
};

export default Header;