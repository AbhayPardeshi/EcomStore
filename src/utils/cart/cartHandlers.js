import { Toast } from "../Toast";

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

  return {
    cartIncrementHandler,
    cartItemDeleteHandler,
    cartDecrementHandler,
  };
};
