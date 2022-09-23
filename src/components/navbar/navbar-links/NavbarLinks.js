import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar-links.module.css";
import { useFilter } from "../../../contexts/filter/FilterProvider";
import { Toast } from "../../../utils/Toast";

export const NavbarLinks = () => {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  // const clickHandler = (category) => {
  //   navigate(`/category/${category}`);
  //   let setTimeoutID = setTimeout(() => {
  //     filterDispatch({
  //       type: "CATEGORY_FILTER",
  //       payload: `${category}`,
  //     });
  //     Toast({ type: "success", msg: `${category}s' products filtered.` });
  //   }, 0);
  //   clearTimeout(setTimeoutID);
  // };
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
        <NavLink to="/category/brands" className={styles.link_btn}>
          brands
        </NavLink>
      </li>
      <li>
        <NavLink to={"#"} className={styles.link_btn}>
          releases
        </NavLink>
      </li>
      <li>
        <NavLink to={"#"} className={styles.link_btn}>
          sales
        </NavLink>
      </li>
    </ul>
  );
};
