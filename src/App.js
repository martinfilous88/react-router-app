import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import NoPage from "./NoPage1";
import Pocitadlo from "./Pocitadlo";
import Kavy from "./Kavy";
import Ukolnicek from "./ukolnicek/Ukolnicek";
import Kalkulacka from "./kalkulacka/Kalkulacka";
import Eshop from "./Eshop";
import OblibenaBarva from "./barva/barva";




export default function App() {
  return (
    <HashRouter basename='/'>
      <Layout/>
      <Routes>
          <Route index element = {<Home />} />
          <Route path="/pocitadlo" element={<Pocitadlo />} />
          <Route path="/kavy" element={<Kavy />} />
          <Route path="/ukolnicek" element={<Ukolnicek />} />
          <Route path="/kalkulacka" element={<Kalkulacka />} />
          <Route path="/eshop" element={<Eshop />} />
          <Route path="/barva " element={<OblibenaBarva />} />
              <Route path="*" element={<NoPage />} />

              
            </Routes>
          </HashRouter>
          )
};
