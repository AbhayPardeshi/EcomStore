import React from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import styles from "./navbar-action-button.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/auth/AuthProvider";

export const NavbarActionButton = () => {
  const { userAuthState } = useAuth();
  const { isUserLoggedIn } = userAuthState;
  const { logoutHandler } = useAuth();
  return (
    <>
      <div className={styles.action_links}>
        <NavLink to="/wishlist" className={styles.like_btn}>
          <AiOutlineHeart />
        </NavLink>
        <NavLink to="/cart">
          <FaCartPlus />
        </NavLink>
        <NavLink to="#">
          <BsSearch />
        </NavLink>
        {isUserLoggedIn ? (
          <div>
            <p
              className={styles.account_button}
              role="button"
              onClick={logoutHandler}
            >
              <FaRegUser />
              Logout
            </p>
          </div>
        ) : (
          <NavLink to="/login" className={styles.account_button}>
            <FaRegUser id="button" />
            Login
          </NavLink>
        )}
      </div>
    </>
  );
};
