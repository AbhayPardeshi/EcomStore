import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext, useReducer } from "react";
import { productReducer } from "./productReducer";
import { useFetch } from "../../services";

const initialProductsState = { productList: [] };

const ProductContext = createContext(initialProductsState);
const useProducts = () => useContext(ProductContext);
const initialFilters = {
  productColors: [],
  brands: [],
  productSize: {
    men: [],
    women: [],
    kids: [],
  },
  category: [],
};
const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [apiURL, setApiURL] = useState("/products");
  const { serverResponse, error, isLoading } = useFetch(apiURL);

  const [productsState, productsDispatch] = useReducer(
    productReducer,
    initialProductsState
  );

  useEffect(() => {
    if (serverResponse) {
      if (serverResponse.status === 200) {
        const allProductsFromServer = serverResponse?.data.products || [];
        productsDispatch({
          type: "UPDATE_PRODUCTS_LIST",
          payload: [...allProductsFromServer],
        });
      }
    }
  }, [serverResponse]);
  console.log(productsState);
  useEffect(() => {
    for (let product of productsState.productList) {
      setFilters((prev) => ({
        productColors: [...prev.productColors, product.productColor],
        brands: [...prev.brands, product.make],
        category: [...prev.category, product.categoryName],
      }));
    }
  }, [productsState.productList]);

  return (
    <ProductContext.Provider
      value={{
        productsState,
        productsDispatch,
        isLoading,
        error,
        filters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
