import React from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "./navbar-action-button.module.css";

export const NavbarActionButton = () => {
  return (
    <div className={styles.action_links}>
      <Link to="/wishlist">
        <a className={styles.like_btn}>
          <FcLike />
        </a>
      </Link>
      <Link to="/login">
        <a>
          <FaRegUser />
        </a>
      </Link>
      <Link to="/cart">
        <a href="#">
          <FaCartPlus />
        </a>
      </Link>
      <Link to="/search">
        <a href="#">
          <BsSearch />
        </a>
      </Link>
    </div>
  );
};
