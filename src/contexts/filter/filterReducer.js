import { setBrand, setCategory } from "../../utils";
const CATEGORY = "CATEGORY";
const ADD_BRAND = "ADD_BRAND";
const REMOVE_BRAND = "REMOVE_BRAND";
const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";

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

    default:
      return { ...state };
  }
};
