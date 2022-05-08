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
  .line {
    height: 2px;
    margin: 5px 0;
    border-bottom: 1px solid lightgray;
    display: block;
    content: "";
    width: 100%;
  }
  code, pre {
    border-radius: 3px;
    padding: 2px 5px;
    border: 1px solid #e8e8e8;
    background-color: #F8F8F8;
    font-size: 14px;
  }
  pre {
    font-size: 12px;
  }
`;
