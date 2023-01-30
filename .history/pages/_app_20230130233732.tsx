import type { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProviderro } from 'styled-components'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
