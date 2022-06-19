import React from "react";
import styles from "./hero-logo.module.css";

export const HeroLogo = () => {
  return (
    <div className={styles.hero_logo}>
      <img src="./assets/images/shoe_palace_name.webp" alt="SHOE PALACE" />
    </div>
  );
};
