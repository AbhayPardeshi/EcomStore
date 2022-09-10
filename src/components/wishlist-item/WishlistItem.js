import React from "react";
import styles from "./wishlistItem.module.css";

const WishlistItem = () => {
  return (
    <>
      <div class={styles.wishlist_item}>
        <img
          src="https://cdn.shopify.com/s/files/1/0852/3376/products/23f9df4a7379d529a9f4fd0c8ab13cc8_2048x2048.jpg?v=1661556625&title=jordan-ct8013-015-air-jordan-12-retro-stealth-mens-lifestyle-shoes-grey-white-free-shipping"
          alt="product"
        />
        <div>
          <p>MENS LIFESTYLE SHOES </p>
          <p>AIR JORDAN 12 RETRO STEALTH</p>
          <p>$200.00</p>
          <p class={styles.remove_item}>remove item</p>
          <button class={styles.addToCart_btn}>move to cart</button>
        </div>
      </div>
    </>
  );
};

export default WishlistItem;
