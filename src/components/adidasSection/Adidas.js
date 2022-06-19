import React from "react";
import styles from "./adidas.module.css";

export const Adidas = () => {
  return (
    <>
      <div className={styles.adidas_banner}>
        <img src="./assets/images/adidas_main.webp" alt="" />
      </div>

      <div className={styles.adidas_grid}>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas1.webp" alt="adidas" />
          </a>
        </div>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas2.webp" alt="adidas" />
          </a>
        </div>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas3.webp" alt="adidas" />
          </a>
        </div>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas4.webp" alt="adidas" />
          </a>
        </div>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas5.webp" alt="adidas" />
          </a>
        </div>
        <div className={styles.grid_items}>
          <a href="#">
            <img src="./assets/images/adidas6.webp" alt="adidas" />
          </a>
        </div>
      </div>
      <div className={styles.btn_div}>
        <button className={styles.btn}>Shop Adidas NMD</button>
      </div>
    </>
  );
};
