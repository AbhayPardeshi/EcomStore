import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/cart-item-card/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class={styles.cart_overlay}>
        <div class={styles.cart}>
          <span
            role="button"
            onClick={() => navigate(-1)}
            class={styles.close_cart}
          >
            <AiOutlineClose />
          </span>
          <h2>shopping cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div class={styles.cart_footer}>
            <h3>Summary</h3>
            <h3>
              your total : $ <span class={styles.cart_total}>0</span>
            </h3>

            <button class={styles.checkout_btn}>checkout $0</button>
            <button onClick={() => navigate(-1)} class={styles.continue_btn}>
              continue shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
