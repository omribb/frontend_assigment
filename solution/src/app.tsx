import React from "react";
import { Route, Routes } from "react-router-dom";
import { BAppWrapper } from "./components/bapp-wrapper";
import { About } from "./pages/about";
import { Airline } from "./pages/airline";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global-style";

export const App: React.FC = () => {
  return (
    <BAppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/airline/:airlineCode" element={<Airline />} />
      </Routes>
    </BAppWrapper>
  );
};
