import { setBrand, setCategory, setColor } from "../../utils";
const CATEGORY = "CATEGORY";
const ADD_BRAND = "ADD_BRAND";
const REMOVE_BRAND = "REMOVE_BRAND";
const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
const ADD_COLOR = "ADD_COLOR";
const REMOVE_COLOR = "REMOVE_COLOR";

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

    default:
      return { ...state };
  }
};
