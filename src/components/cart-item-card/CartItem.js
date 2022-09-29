import React from "react";
import styles from "./cartItem.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartAndWishlist } from "../../contexts/cartAndwishlist/CartAndWishlistProvider";
import { CartHandlers } from "../../utils/cart/cartHandlers";

const CartItem = ({ products }) => {
  const { cartAndWishlistDispatch } = useCartAndWishlist();
  const { name, originalPrice, quantitiesInCart, _id, imageUrl } = products;
  const { cartItemDeleteHandler, cartDecrementHandler, cartIncrementHandler } =
    CartHandlers(cartAndWishlistDispatch);
  return (
    <>
      <div class={styles.cart_item}>
        <img src={imageUrl} />
        <div>
          <p>{name}</p>
          <p>${originalPrice}</p>
          <p className={styles.cart_item_size}>8</p>
          <div className={styles.item_count}>
            <span role="button" onClick={(e) => cartDecrementHandler(e, _id)}>
              <AiOutlineMinus />
            </span>
            <span class={styles.item_amount}>{quantitiesInCart}</span>
            <span role="button" onClick={(e) => cartIncrementHandler(e, _id)}>
              <AiOutlinePlus />
            </span>
          </div>
          <p
            role="button"
            onClick={(e) => cartItemDeleteHandler(e, _id)}
            class={styles.remove_item}
          >
            remove item
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
