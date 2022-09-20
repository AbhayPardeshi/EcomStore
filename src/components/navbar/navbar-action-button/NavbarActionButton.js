import React from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";

import styles from "./navbar-action-button.module.css";
import { NavLink } from "react-router-dom";

export const NavbarActionButton = () => {
  return (
    <div className={styles.action_links}>
      <NavLink to="/wishlist" className={styles.like_btn}>
        <FcLike />
      </NavLink>
      <NavLink to="/login">
        <FaRegUser />
      </NavLink>
      <NavLink to="/cart">
        <FaCartPlus />
      </NavLink>
      <NavLink to="#">
        <BsSearch />
      </NavLink>
    </div>
  );
};
