import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>PodBubble AI</title>
            <meta name="description" content="AI agents that reduce staff workload in schools" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
      <Component {...pageProps} />
    </>
  );
}
