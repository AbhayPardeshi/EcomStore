export const isItemInCartAndWishlist = (cartItems, wishlistItem) => {
  const isItemInCart = (_id) => {
    return cartItems.find((item) => item._id === _id);
  };

  const isItemInWishlist = (_id) => {
    return wishlistItem.find((item) => item._id === _id);
  };
  return { isItemInCart, isItemInWishlist };
};
