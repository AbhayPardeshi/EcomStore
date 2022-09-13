import React from "react";
import { NavbarActionButton } from "./navbar-action-button/NavbarActionButton";
import { NavbarLinks } from "./navbar-links/NavbarLinks";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <p className={styles.subscribe_para}>
          <strong>Join the family | Subscribe to our email list</strong>
        </p>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_center}>
          <section>
            <Link to="/">
              <img
                className={styles.logo}
                src="/assets/images/Shoe_palace.webp"
                alt="comfyFeet"
              />
            </Link>
          </section>
        </div>
        <NavbarLinks />
        <NavbarActionButton />
      </nav>
    </>
  );
};

export default Navbar;
