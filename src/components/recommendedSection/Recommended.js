import React from "react";
import styles from "./recommended.module.css";
import { ImageContainer } from "./ImageContainer";

export const Recommended = () => {
  return (
    <main className={styles.recommend_div}>
      <p id={styles.heading}>RECOMMENDED FOR YOU</p>
      <div className={styles.shoe_section}>
        <ImageContainer />
      </div>
    </main>
  );
};
