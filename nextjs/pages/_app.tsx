import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>PodBubble AI for Schools</title>
            <meta name="description" content="AI agents that reduce staff workload in schools" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" href="/favicon.ico"/>
            {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="PodBubble AI" />
        <meta property="og:description" content="AI agents that reduce staff workload in schools" />
        <meta property="og:image" content="https://www.podbubble.ai/hero-homepage.jpg" /> {/* Replace with your actual image URL */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.podbubble.ai/" /> {/* Replace with your actual site URL */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PodBubble AI" />
        <meta name="twitter:description" content="AI agents that reduce staff workload in schools" />
        <meta name="twitter:image" content="https://www.podbubble.ai/hero-homepage.jpg" /> {/* Replace with your actual image URL */}
        </Head>
      <Component {...pageProps} />
    </>
  );
}
