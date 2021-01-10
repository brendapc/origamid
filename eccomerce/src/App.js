import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contato from "./components/Contato";
import './App.css'
import Produto from "./components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
