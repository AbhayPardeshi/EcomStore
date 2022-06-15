import React from "react";
import styles from "./navbar-links.module.css";

export const NavbarLinks = () => {
  return (
    <ul className={styles.nav_links}>
      <li>
        <a href="#" className={styles.link_btn}>
          new
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          men
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          women
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          kids
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          brands
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          releases
        </a>
      </li>
      <li>
        <a href="#" className={styles.link_btn}>
          sales
        </a>
      </li>
    </ul>
  );
};
