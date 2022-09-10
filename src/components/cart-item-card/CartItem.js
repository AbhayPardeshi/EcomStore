import React from "react";
import styles from "./cartItem.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = () => {
  return (
    <>
      <div class={styles.cart_item}>
        <img
          src="https://cdn.shopify.com/s/files/1/0852/3376/products/23f9df4a7379d529a9f4fd0c8ab13cc8_2048x2048.jpg?v=1661556625&title=jordan-ct8013-015-air-jordan-12-retro-stealth-mens-lifestyle-shoes-grey-white-free-shipping"
          alt="product"
        />
        <div>
          <p>MENS LIFESTYLE SHOES AIR JORDAN 12 RETRO STEALTH</p>
          <p>$200.00</p>
          <p className={styles.cart_item_size}>8</p>
          <div className={styles.item_count}>
            <span>
              <AiOutlineMinus />
            </span>
            <span class={styles.item_amount}>1</span>
            <span>
              <AiOutlinePlus />
            </span>
          </div>
          <p class={styles.remove_item}>remove item</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
