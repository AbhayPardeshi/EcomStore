import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import DisplayItem from "./components/display-item-card/DisplayItem";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";
import LoginPage from "./components/authentication/LoginPage";
import SignupPage from "./components/authentication/SignupPage";
import { Categories } from "./pages/sections/Categories";
import { Sidebar } from "./components/navbar/sidebar/Sidebar";
import NewArrivals from "./pages/newArrivals/NewArrivals";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:catergoryName/:id"
            element={<DisplayItem />}
          />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/category/:id" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
