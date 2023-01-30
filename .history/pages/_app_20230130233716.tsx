import type { AppProps } from 'next/app'
import React from 'react'
import { create}
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
