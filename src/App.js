import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NoPage from "./NoPage1";
import Pocitadlo from "./Pocitadlo";
import Kavy from "./Kavy";
import Ukolnicek from "./ukolnicek/Ukolnicek";
import Kalkulacka from "./kalkulacka/Kalkulacka";
import Eshop from "./Eshop";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path="pocitadlo" element={<Pocitadlo />} />
          <Route path="kavy" element={<Kavy />} />
          <Route path="ukolnicek" element={<Ukolnicek />} />
          <Route path="kalkulacka" element={<Kalkulacka />} />
          <Route path="eshop" element={<Eshop />} />
              <Route path="*" element={<NoPage />} />

              </Route>
            </Routes>
          </BrowserRouter>
          )
};
