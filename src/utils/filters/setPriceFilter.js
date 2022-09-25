export const setPriceRange = (state, payload) => {
  const priceRange = String(payload);

  switch (priceRange) {
    case "0,50":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    case "51,100":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    case "101,150":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    case "151,200":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    case "201,400":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    case "401,400000":
      return {
        ...state,
        productPriceRanges: [...state.productPriceRanges, priceRange],
      };

    default:
      return state;
  }
};
