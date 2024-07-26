import '~/styles/global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { lazy } from 'react'
import sans, { mono, serif } from '../utils/fonts'

export type SharedPageProps = {
  draftMode: boolean
  token: string
}

import favicon from '~/assets/images/favicon.ico'

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps

  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
