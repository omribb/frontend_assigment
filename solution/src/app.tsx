import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BAppWrapper } from "./components/bapp-wrapper";
import { IsMobileContext } from "./context/is-mobile-context";
import { About } from "./pages/about";
import { Airline } from "./pages/airline";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global-style";

export const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const listenScreenWidth = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", listenScreenWidth);
    return function cleanup() {
      window.removeEventListener("resize", listenScreenWidth);
    };
  }, []);
  return (
    <IsMobileContext.Provider value={isMobile}>
      <BAppWrapper>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/airline/:airlineCode" element={<Airline />} />
        </Routes>
      </BAppWrapper>
    </IsMobileContext.Provider>
  );
};
