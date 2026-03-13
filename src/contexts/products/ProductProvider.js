import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext, useReducer } from "react";
import { productReducer } from "./productReducer";
import { useFetch } from "../../services";
import { useLocation } from "react-router-dom";

const initialProductsState = { productList: [] };

const getBaseQueryFromPath = (pathname) => {
  if (pathname === "/new") {
    return { isNewArrival: true };
  }

  if (pathname.startsWith("/category/")) {
    const gender = pathname.split("/")[2];

    return gender ? { gender } : {};
  }

  return {};
};

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
  const { pathname } = useLocation();
  const [filters, setFilters] = useState(initialFilters);
  const [apiURL, setApiURL] = useState("");
  const [baseQuery, setBaseQuery] = useState(() => getBaseQueryFromPath(pathname));

  const { serverResponse, error, isLoading } = useFetch(apiURL);

  const [productsState, productsDispatch] = useReducer(
    productReducer,
    initialProductsState
  );

  useEffect(() => {
    if (serverResponse) {
      if (serverResponse.status === 200) {
        const allProductsFromServer = serverResponse?.data.items || [];
        productsDispatch({
          type: "UPDATE_PRODUCTS_LIST",
          payload: [...allProductsFromServer],
        });
      }
    }
  }, [serverResponse]);

  useEffect(() => {
     const products = productsState.productList || [];

     const brands = [...new Set(products.map((product) => product.brand))];

     const categories = [
       ...new Set(products.flatMap((product) => product.categories || [])),
     ];
    
     const productColors = [
        ...new Set(
          products.flatMap((product) =>
            product.varients?.variantList?.map((varient) => varient.color) || []
          )
        ),
      ];

      setFilters((prev) => ({
        ...prev,
        brands,
        category: categories,
        productColors,
      }));  

  }, [productsState.productList]);

  useEffect(() => {
    setBaseQuery(getBaseQueryFromPath(pathname));
  }, [pathname]);

  return (
    <ProductContext.Provider
      value={{
        productsState,
        productsDispatch,
        isLoading,
        error,
        filters,
        setApiURL,
        baseQuery,
        setBaseQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
