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
  const { getTotalPrice } = priceHandler();
  const cartLength = cartItems?.length;
  return (
    <div className={styles.cart_overlay}>
      <div className={styles.cart}>
        <span
          role="button"
          onClick={() => navigate(-1)}
          className={styles.close_cart}
        >
          <AiOutlineClose />
        </span>
        <h2>shopping cart</h2>
        {cartLength === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Your Cart is Empty!!!</h2>
          </div>
        ) : (
          cartItems?.map((products) => {
            return <CartItem key={products._id} products={products} />;
          })
        )}
        {cartLength === 0 ? (
          <div></div>
        ) : (
          <div className={styles.cart_footer}>
            <h3>Summary</h3>
            <h3>
              your total : $
              <span className={styles.cart_total}>
                {Math.trunc(getTotalPrice(cartItems))}
              </span>
            </h3>

            <button className={styles.checkout_btn}>
              checkout ${Math.trunc(getTotalPrice(cartItems))}
            </button>
          </div>
        )}
        <div className={styles.buttonDiv}>
          <button onClick={() => navigate(-1)} className={styles.continue_btn}>
            continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
