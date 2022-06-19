import React from "react";
import styles from "./jordan-shop.module.css";
export const JordanShop = () => {
  return (
    <>
      <div className={styles.mitchellNess_image}>
        <p>
          <img
            src="./assets/images/mitchellNess-image.webp"
            alt="mitchell-ness"
          />
        </p>
      </div>
      <div className={styles.jordan_shop_section}>
        <p> The Jordan Shop </p>
        <div className={styles.shoe_grid}>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan1.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan2.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan3.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan4.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan5.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan6.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan7.webp" alt="" />
            </a>
          </div>
          <div className={styles.JordanShop_items}>
            <a href="#">
              <img src="./assets/images/jordan8.webp" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.afterpay_div}>
        <a href="#" className={styles.afterpay_div_flex}>
          <p>Shop now.Pay later.Always interest-free</p>
          <img src="./assets/images/afterpay-button.png" alt="" />
        </a>
      </div>
    </>
  );
};
