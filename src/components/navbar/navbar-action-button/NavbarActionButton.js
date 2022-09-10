import React from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";

import styles from "./navbar-action-button.module.css";

export const NavbarActionButton = () => {
  return (
    <div className={styles.action_links}>
      <a href="#" className={styles.like_btn}>
        <FcLike />
      </a>
      <a href="#">
        <FaRegUser />
      </a>
      <a href="#">
        <FaCartPlus />
      </a>
      <a href="#">
        <BsSearch />
      </a>
    </div>
  );
};
