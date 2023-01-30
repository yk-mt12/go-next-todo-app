import type { AppProps } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "rgb(35, 39, 47)",
    font: "#ffffff",
    button: "rgb(8, 126, 164)",
    form: "rgb(52, 58, 70)",
    hover: "rgba(8, 126, 164, 0.8)",
    trash: "#ff0000",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export const GlobalStyle = createGlobalStyle`
  html,body {
    font-size: 0.625em;
    font-weight: 400;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-align: justify;
    box-sizing: border-box;
    letter-spacing: 1px;
    overflow-x:hidden;
  }

  a{
    text-decoration: none;
    color: #111111;
  }

  input{
          border: none;
          outline: none;
  }

  button {
    font: inherit;
          cursor: pointer;
          border: none;
          outline: none;
          appearance: none;
  }

* {
  box-sizing: border-box;
}
`;
