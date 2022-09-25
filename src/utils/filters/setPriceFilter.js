export const setPriceRange = (state, payload) => {
  const priceRange = payload;
  switch (priceRange) {
    case "$0 - $50":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [0, 50]],
      };

    case "$51 - $100":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [51, 100]],
      };

    case "$101 - $150":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [101, 150]],
      };

    case "$151 - $200":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [151, 200]],
      };

    case "$201 - $400":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [201, 400]],
      };

    case "$401 And Up":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, [401, 100000]],
      };

    default:
      return state;
  }
};
