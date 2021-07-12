import React from 'react'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <link 
        rel="apple-touch-icon" 
        sizes="180x180" 
        href="/favicon/apple-touch-icon.png" />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="32x32" 
        href="/favicon/favicon-32x32.png" />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="16x16" 
        href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </Head>
  )
}

export default Meta