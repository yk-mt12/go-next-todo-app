import type { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProviderro } from 'styled-components'

const theme = {
  colors: {
    background: ""
  }
}
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
