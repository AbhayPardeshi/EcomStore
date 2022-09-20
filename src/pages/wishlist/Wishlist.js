import React from "react";
import WishlistItem from "../../components/wishlist-item/WishlistItem";
import styles from "./wishlist.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class={styles.wishlist_overlay}>
        <div class={styles.wishlist}>
          <span
            role="button"
            onClick={() => navigate(-1)}
            class={styles.close_wishlist}
          >
            <AiOutlineClose />
          </span>
          <h2>shopping wishlist</h2>
          <WishlistItem />
          <div class={styles.wishlist_footer}>
            <button onClick={() => navigate(-1)} class={styles.continue_btn}>
              continue shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
