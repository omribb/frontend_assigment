import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    line-height: 1.3;
    font-size: 16px;
    font-family: Assistant, Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: ${(props): string => props.theme.colors.main};
  }
`;
