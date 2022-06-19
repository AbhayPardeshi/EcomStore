import React from "react";
import styles from "./godfather.module.css";
export const GodfatherShoePalace = () => {
  return (
    <>
      <section className={styles.godfather_section}>
        <div className={styles.godfather_img}>
          <img src="./assets/images/godfatherSection.webp" alt="Godfather" />
        </div>
        <div className={styles.godfather_shop}>
          <h1>Shoe Palace X The Godfather</h1>
          <button className={styles.btn}>Shop now</button>
        </div>
      </section>
    </>
  );
};
