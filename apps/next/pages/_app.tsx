import 'raf/polyfill'
import 'setimmediate'
const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

import '../global.css'
import { AppProps } from 'next/app'
import Nav from 'app/modules/layout/templates/nav'
import { MobileMenuProvider } from 'app/lib/context/mobile-menu-context'
import Layout from 'app/modules/layout/templates'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Build cross platforms ecom apps with medusa.js that get you the best of web and native mobile using Next.js and Expo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider>
        <MobileMenuProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MobileMenuProvider>
      </Provider>
    </>
  )
}

export default MyApp
