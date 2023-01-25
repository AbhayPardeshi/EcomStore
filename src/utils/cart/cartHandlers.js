import { Toast } from "../../services/Toast";

export const CartHandlers = (cartAndWishlistDispatch) => {
  const cartItemDeleteHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "DELETE_CART_PRODUCTS",
      payload: id,
    });
    Toast({ type: "success", msg: `Item removed from cart.` });
  };

  const cartIncrementHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "UPDATE_CART_PRODUCT_QUANTITY",
      payload: {
        action: "increment",
        id: id,
      },
    });
  };

  const cartDecrementHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "UPDATE_CART_PRODUCT_QUANTITY",
      payload: {
        action: "decrement",
        id: id,
      },
    });
  };

  const wishlistItemDeleteHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "DELETE_WISHLIST_PRODUCTS",
      payload: id,
    });
    Toast({ type: "success", msg: `Item removed from wishlist.` });
  };

  const moveToCart = (e, item) => {
    e.stopPropagation();

    cartAndWishlistDispatch({
      type: "DELETE_WISHLIST_PRODUCTS",
      payload: item._id,
    });
    let setTimeoutID;
    setTimeoutID = setTimeout(() => {
      cartAndWishlistDispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
    }, 0);
    Toast({ type: "success", msg: `${item.name} moved to cart.` });
    return () => clearTimeout(setTimeoutID);
  };

  return {
    cartIncrementHandler,
    cartItemDeleteHandler,
    cartDecrementHandler,
    wishlistItemDeleteHandler,
    moveToCart,
  };
};
