import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Contato from "./components/Contato";
import NaoEncontrada from "./components/NaoEncontrada";
import Produto from "./components/Produto";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="sobre" element={<Sobre />} />,
        <Route path="contato" element={<Contato />} />,
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="produto/:id/*" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
