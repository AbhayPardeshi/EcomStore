export const isItemInCartAndWishlist = (cartItems) => {
  const isItemInCart = (_id) => {
    return cartItems.find((item) => item._id === _id);
  };
  return { isItemInCart };
};
