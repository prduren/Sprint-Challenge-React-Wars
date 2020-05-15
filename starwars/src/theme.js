import React from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const theme = {
  colors: {
    rose: "#8b575c",
    oldrose: "#c98986",
    orchid: "#f6bdd1",
    lightpink: "#f6e4f6",
    white: "#f4f4f4",
  },
};

export const ThemeProvider = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

`;

export default theme;
