import React from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import styles from "./navbar-action-button.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/auth/AuthProvider";
import { useCartAndWishlist } from "../../../contexts/cartAndwishlist/CartAndWishlistProvider";

export const NavbarActionButton = () => {
  const { userAuthState } = useAuth();
  const { isUserLoggedIn } = userAuthState;
  const { logoutHandler } = useAuth();
  const { cartItems, wishlistItems } = useCartAndWishlist();
  return (
    <>
      <div className={styles.action_links}>
        <div className={styles.wishlistLink}>
          <span>
            <NavLink to="/wishlist" className={styles.like_btn}>
              <AiOutlineHeart />
            </NavLink>
          </span>
          {wishlistItems?.length ? (
            <div className={styles.wishlistItemsCount}>
              {wishlistItems.length}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.cartLink}>
          <span>
            <NavLink to="/cart">
              <FaCartPlus />
            </NavLink>
          </span>
          {cartItems?.length ? (
            <div className={styles.cartItemsCount}>{cartItems.length}</div>
          ) : (
            <div></div>
          )}
        </div>

        <NavLink to="#">
          <BsSearch />
        </NavLink>

        <div className={styles.authentication}></div>
        {/* {isUserLoggedIn ? (
          <p
            className={styles.account_button}
            role="button"
            onClick={logoutHandler}
          >
            <FaRegUser />
            Logout
          </p>
        ) : (
          <NavLink to="/login" className={styles.account_button}>
            <FaRegUser id="button" />
            Login
          </NavLink>
        )} */}
      </div>
    </>
  );
};
