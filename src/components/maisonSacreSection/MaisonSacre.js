import React from "react";
import styles from "./maison-sacre.module.css";
export const MaisonSacre = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.maison_article_div}>
          <h1>MAISON ARTICLE</h1>
          <p>Luxury for all</p>
          <button className={styles.btn}>Shop</button>
        </div>
        <div className={styles.sacre_div}>
          <h1>SACRÉ</h1>
          <p>Lifestyle essentials designed to fit.</p>
          <button className={styles.btn}>Shop</button>
        </div>
      </div>
    </>
  );
};
