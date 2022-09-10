import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import DisplayItem from "./components/display-item-card/DisplayItem";
import Filter from "./components/filter/Filter";
import DisplayMultipleItems from "./components/display-multipe-items/DisplayMultipleItems";
import Sections from "./pages/sections/Sections";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
