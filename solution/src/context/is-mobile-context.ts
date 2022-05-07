import { createContext, useContext } from "react";

export const IsMobileContext = createContext<boolean>(false);

export function useIsMobile() {
  const isMobile = useContext(IsMobileContext);

  return isMobile;
}