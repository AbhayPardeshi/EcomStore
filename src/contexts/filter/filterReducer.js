import { setBrand, setCategory, setColor, setPriceRange } from "../../utils";
import { useFilter } from "./FilterProvider";
const CATEGORY = "CATEGORY";
const ADD_BRAND = "ADD_BRAND";
const REMOVE_BRAND = "REMOVE_BRAND";
const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
const ADD_COLOR = "ADD_COLOR";
const REMOVE_COLOR = "REMOVE_COLOR";
const ADD_PRICE_RANGE = "ADD_PRICE_RANGE";
const REMOVE_PRICE_RANGE = "REMOVE_PRICE_RANGE";

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        brandName: [],
        productColors: [],
        productPriceRanges: [],
        productSize: [],
      };
    case CATEGORY:
      return setCategory(state, payload);
    case ADD_BRAND:
      return setBrand(state, payload);
    case REMOVE_BRAND:
      const brands = state.brandName.filter((name) => name !== payload);
      return {
        ...state,
        brandName: [...brands],
      };
    case ADD_COLOR:
      return setColor(state, payload);
    case REMOVE_COLOR:
      const colors = state.productColors.filter((name) => name !== payload);
      return {
        ...state,
        productColors: [...colors],
      };

    case ADD_PRICE_RANGE:
      console.log(state.productPriceRanges);
      return setPriceRange(state, payload);
    case REMOVE_PRICE_RANGE:
    // const priceRange = state.productPriceRanges.filter(
    //   (name) => name !== payload
    // );

    // return {
    //   ...state,
    //   productPriceRanges: [...priceRange],
    // };

    default:
      return { ...state };
  }
};
