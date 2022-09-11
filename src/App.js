import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import DisplayItem from "./components/display-item-card/DisplayItem";
import Filter from "./components/filter/Filter";
import DisplayMultipleItems from "./components/display-multipe-items/DisplayMultipleItems";
import Sections from "./pages/sections/Sections";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";
import LoginPage from "./components/authentication/LoginPage";
import SignupPage from "./components/authentication/SignupPage";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<DisplayItem />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/multipleitems" element={<DisplayMultipleItems />} />
          <Route path="/section" element={<Sections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
