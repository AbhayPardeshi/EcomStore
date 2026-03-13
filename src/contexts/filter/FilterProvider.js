import { useContext, createContext, useEffect, useReducer } from "react";
import { useProducts } from "../products/ProductProvider";
import { filterReducer } from "./filterReducer";
import { buildProductsUrl } from "../../utils";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
export const initialFilterState = {
  brandName: [],
  categoryName: [],
  productColors: [],
  productPriceRanges: [],
  newArrivals: [],
  selectedGender: "",
};
const FilterProvider = ({ children }) => {
  const { productsState, isLoading, error, setApiURL, baseQuery } = useProducts();
  const { productList } = productsState;
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  useEffect(() => {
    setApiURL(buildProductsUrl(baseQuery, filterState));
  }, [baseQuery, filterState, setApiURL]);

  const sortedProducts = productList;
  const newArrivalSortedProducts = productList;

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
