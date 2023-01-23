import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { ProductProvider } from "./contexts/products/ProductProvider";
import { FilterProvider } from "./contexts/filter/FilterProvider";
import { CartAndWishlistProvider } from "./contexts/cartAndwishlist/CartAndWishlistProvider";
import { SidebarProvider } from "./contexts/sidebar/SidebarProvider";
import { SelectedFiltersProvider } from "./contexts/SelectedFilters/SelectedFiltersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <CartAndWishlistProvider>
              <SidebarProvider>
                <SelectedFiltersProvider>
                  <App />
                </SelectedFiltersProvider>
              </SidebarProvider>
            </CartAndWishlistProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
