import { useContext, createContext } from "react";
import { useProducts } from "../products/ProductProvider";
import { filterReducer } from "./filterReducer";
import { categoryFilter, brandFilter, priceFilter } from "../../utils";
import { useReducer } from "react";
import { useEffect } from "react";
import { colorFilter } from "../../utils/colorFilter";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
export const initialFilterState = {
  brandName: [],
  categoryName: "",
  productColors: [],
  productPriceRanges: [],
  productSize: [],
};
const FilterProvider = ({ children }) => {
  const { productsState, isLoading, error } = useProducts();
  const { productList } = productsState;
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  let sortedProducts = categoryFilter(productList, filterState.categoryName);
  sortedProducts = brandFilter(sortedProducts, filterState.brandName);
  sortedProducts = colorFilter(sortedProducts, filterState.productColors);
  console.log(sortedProducts);
  sortedProducts = priceFilter(sortedProducts, filterState.productPriceRanges);
  console.log(sortedProducts);
  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
        sortedProducts,
        isLoading,
        error,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
