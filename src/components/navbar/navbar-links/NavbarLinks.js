import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar-links.module.css";

export const NavbarLinks = () => {
  return (
    <ul className={styles.nav_links}>
      <li>
        <NavLink to="/category/new" className={styles.link_btn}>
          new
        </NavLink>
      </li>
      <li>
        <NavLink to="/category/men" className={styles.link_btn}>
          men
        </NavLink>
      </li>
      <li>
        <NavLink to="/category/women" className={styles.link_btn}>
          women
        </NavLink>
      </li>
      <li>
        <NavLink to="/category/kids" className={styles.link_btn}>
          kids
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={styles.link_btn}>
          brands
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={styles.link_btn}>
          releases
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={styles.link_btn}>
          sales
        </NavLink>
      </li>
    </ul>
  );
};
