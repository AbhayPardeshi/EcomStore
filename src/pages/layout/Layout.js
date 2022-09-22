import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
