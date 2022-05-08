import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import logo from "../assets/blackrabbit-black-logo.svg";
import { useIsMobile } from "../context/is-mobile-context";

export const Menu: React.FC = () => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        display: "flex",
        textAlign: "start",
        maxWidth: "1000px",
        margin: "10px auto",
        alignItems: "center",
        borderBottom: "1px solid " + theme.colors.grey,
        padding: isMobile ? "0 20px" : undefined,
      }}
    >
      <div>
        <img
          src={logo}
          alt=""
          style={{ height: "20px", position: "relative", top: "3px" }}
        />
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <Link to="/" style={{ color: theme.colors.main }}>
          Home
        </Link>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <Link to="/instructions" style={{ color: theme.colors.main }}>
          Home Assignment Instructions
        </Link>
      </div>
    </div>
  );
};
