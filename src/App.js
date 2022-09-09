import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { Route, Routes } from "react-router-dom";
import DisplayItem from "./components/display-item-card/DisplayItem";
import Filter from "./components/filter/Filter";
import DisplayMultipleItems from "./components/display-multipe-items/DisplayMultipleItems";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<DisplayItem />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/multipleitems" element={<DisplayMultipleItems />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
