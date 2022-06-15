import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.hero}>
        <div classname={styles.hero_image}>
          <img src="./assets/images/hero-image.webp" alt="heroImage" />
        </div>
      </div>
      <div classname="hero_name">
        <img
          src="./assets/images/shoe_palace_name.webp"
          alt="SHOE PALACE"
          width="650px"
        />
      </div>
    </>
  );
};

export default Header;
