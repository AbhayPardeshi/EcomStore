import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/cart-item-card/CartItem";
import { useCartAndWishlist } from "../../contexts/cartAndwishlist/CartAndWishlistProvider";
import styles from "./cart.module.css";
import { priceHandler } from "../../utils/cart/priceHandler";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartAndWishlist();
  console.log(cartItems);
  const { getTotalPrice } = priceHandler();
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
          {cartItems.map((products) => {
            return <CartItem key={products._id} products={products} />;
          })}

          <div class={styles.cart_footer}>
            <h3>Summary</h3>
            <h3>
              your total : ${" "}
              <span class={styles.cart_total}>
                {Math.trunc(getTotalPrice(cartItems))}
              </span>
            </h3>

            <button class={styles.checkout_btn}>
              checkout ${Math.trunc(getTotalPrice(cartItems))}
            </button>
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
