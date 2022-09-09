import React from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <>
      <div class={styles.cart_overlay}>
        <div class={styles.cart}>
          <span class={styles.close_cart}>
            <AiOutlineClose />
          </span>
          <h2>shopping cart</h2>
          <div class={styles.cart_item}>
            <img
              src="https://cdn.shopify.com/s/files/1/0852/3376/products/23f9df4a7379d529a9f4fd0c8ab13cc8_2048x2048.jpg?v=1661556625&title=jordan-ct8013-015-air-jordan-12-retro-stealth-mens-lifestyle-shoes-grey-white-free-shipping"
              alt="product"
            />
            <div>
              <p>MENS LIFESTYLE SHOES AIR JORDAN 12 RETRO STEALTH</p>
              <p>$200.00</p>
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
          <div class={styles.cart_item}>
            <img
              src="https://cdn.shopify.com/s/files/1/0852/3376/products/23f9df4a7379d529a9f4fd0c8ab13cc8_2048x2048.jpg?v=1661556625&title=jordan-ct8013-015-air-jordan-12-retro-stealth-mens-lifestyle-shoes-grey-white-free-shipping"
              alt="product"
            />
            <div>
              <p>MENS LIFESTYLE SHOES AIR JORDAN 12 RETRO STEALTH</p>
              <p>$200.00</p>
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
          <div class={styles.cart_item}>
            <img
              src="https://cdn.shopify.com/s/files/1/0852/3376/products/23f9df4a7379d529a9f4fd0c8ab13cc8_2048x2048.jpg?v=1661556625&title=jordan-ct8013-015-air-jordan-12-retro-stealth-mens-lifestyle-shoes-grey-white-free-shipping"
              alt="product"
            />
            <div>
              <p>MENS LIFESTYLE SHOES AIR JORDAN 12 RETRO STEALTH</p>
              <p>$200.00</p>
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

          <div class={styles.cart_footer}>
            <h3>Summary</h3>
            <h3>
              your total : $ <span class={styles.cart_total}>0</span>
            </h3>

            <button class={styles.checkout_btn}>checkout $0</button>
            <button class={styles.continue_btn}>continue shopping</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
