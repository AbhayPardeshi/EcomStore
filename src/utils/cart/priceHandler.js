export const priceHandler = () => {
  const getTotalPrice = (cartItems) => {
    if (cartItems) {
      return cartItems.reduce((acc, curr) => {
        return (acc = acc + Number(curr.originalPrice * curr.quantitiesInCart));
      }, 0);
    }
  };
  return {
    getTotalPrice,
  };
};
