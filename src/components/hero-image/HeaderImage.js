import React from "react";
import styles from "./headerImage.module.css";
const HeaderImage = () => {
  return (
    <>
      <div className={styles.hero}>
        <div classname={styles.hero_image}>
          <img src="./assets/images/hero-image.webp" alt="heroImage" />
        </div>
      </div>
    </>
  );
};

export default HeaderImage;
