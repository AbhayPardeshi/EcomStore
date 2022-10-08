import React from "react";
import { useCartAndWishlist } from "../../contexts/cartAndwishlist/CartAndWishlistProvider";
import { useFetch } from "../../services";
import { CartHandlers } from "../../utils/cart/cartHandlers";
import styles from "./wishlistItem.module.css";

const WishlistItem = () => {
  const { wishlistItems, cartAndWishlistDispatch } = useCartAndWishlist();
  const { wishlistItemDeleteHandler, moveToCart } = CartHandlers(
    cartAndWishlistDispatch
  );
  const length = wishlistItems?.length;
  console.log(length);
  return (
    <>
      {length === 0 ? (
        <div className={styles.emptyWishlist}>
          <h2>Your Wishlist is Empty!!!</h2>
        </div>
      ) : (
        wishlistItems.map((product, index) => {
          const { imageUrl, name, description, originalPrice, _id } = product;
          return (
            <>
              <div class={styles.wishlist_item} key={index}>
                <img src={imageUrl} alt={name} />
                <div>
                  <p>{description} </p>
                  <p>{name}</p>
                  <p>${originalPrice}</p>
                  <p
                    class={styles.remove_item}
                    role="button"
                    onClick={(e) => wishlistItemDeleteHandler(e, _id)}
                  >
                    remove item
                  </p>
                  <button
                    onClick={(e) => {
                      moveToCart(e, product);
                    }}
                    class={styles.addToCart_btn}
                  >
                    move to cart
                  </button>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default WishlistItem;
