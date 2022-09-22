import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthProvider";
import { NavbarActionButton } from "./navbar-action-button/NavbarActionButton";
import { NavbarLinks } from "./navbar-links/NavbarLinks";
import styles from "./navbar.module.css";
const Navbar = () => {
  const { userAuthState } = useAuth();
  
  return (
    <>
      <div className={styles.container}>
        <p className={styles.subscribe_para}>
          <strong>Join the family | Subscribe to our email list</strong>
        </p>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_center}>
          <Link to="/">
            <img
              className={styles.logo}
              src="/assets/images/Shoe_palace.webp"
              alt="comfyFeet"
            />
          </Link>
        </div>
        <NavbarLinks />
        <NavbarActionButton />
      </nav>
    </>
  );
};

export default Navbar;
