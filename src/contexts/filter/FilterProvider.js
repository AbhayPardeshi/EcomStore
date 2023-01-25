import { useContext, createContext } from "react";
import { useProducts } from "../products/ProductProvider";
import { filterReducer } from "./filterReducer";
import {
  categoryFilter,
  brandFilter,
  priceFilter,
  newArrivalsFilter,
} from "../../utils";
import { useReducer } from "react";
import { colorFilter } from "../../utils/colorFilter";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
export const initialFilterState = {
  brandName: [],
  categoryName: [],
  productColors: [],
  productPriceRanges: [],
  newArrivals: [],
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
  sortedProducts = priceFilter(sortedProducts, filterState.productPriceRanges);

  let newArrivalSortedProducts = newArrivalsFilter(
    productList,
    filterState.newArrivals
  );
  newArrivalSortedProducts = brandFilter(
    newArrivalSortedProducts,
    filterState.brandName
  );
  newArrivalSortedProducts = colorFilter(
    newArrivalSortedProducts,
    filterState.productColors
  );
  newArrivalSortedProducts = priceFilter(
    newArrivalSortedProducts,
    filterState.productPriceRanges
  );

  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
        sortedProducts,
        newArrivalSortedProducts,
        isLoading,
        error,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
