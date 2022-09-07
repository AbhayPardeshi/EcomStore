import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import DisplayItem from "./components/display-item-card/DisplayItem";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item" element={<DisplayItem />} />
          <Route path=""
        </Routes>
      </Layout>
    </>
  );
}

export default App;
