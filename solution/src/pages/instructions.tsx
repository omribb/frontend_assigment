import React from "react";
import { BSpacer } from "../components/b-spacer";
import { BTitleRegularColor } from "../components/btitle";
import { useIsMobile } from "../context/is-mobile-context";

export const Instructions: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div style={{ padding: isMobile ? "10px" : undefined }}>
      <BTitleRegularColor>
        Black Rabbit frontend home assignment
      </BTitleRegularColor>
      <BSpacer />
    </div>
  );
};
