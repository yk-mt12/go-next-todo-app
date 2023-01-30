import type { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    background: "rgb(35, 39, 47)",
    font: "#ffffff",
    button: "rgb(8, 126, 164)",
    form: "rgb(52, 58, 70)",
    hover: "rgba(8, 126, 164, 0.8)",
    trash: "#ff0000",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={}
    </>
  )
}
