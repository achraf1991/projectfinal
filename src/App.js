import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import Search from "./pages/Search";
import Login from "./pages/Login";
import "./App.css";
import { produitslist } from "./pages/Data";
import ProductDetails from "./pages/ProductDetails";
import ServiceInstallation from "./pages/ServiceInstallation";
import ServiceReparation from "./pages/ServiceReparation";

// import {Rate} from './pages/Rate'
const App = () => {
  const [Produitslist, setData] = useState(produitslist);

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/produits"
            element={<Produits Produitslist={Produitslist} />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/produits/:id"
            element={<ProductDetails Produitslist={Produitslist} />}
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/ServiceInstallation"
            element={
              <ServiceInstallation />
            }
          />

          <Route path="/ServiceReparation" element={<ServiceReparation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
