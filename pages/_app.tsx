import { FC } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Maintenance from './maintenance'
import '../styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const underMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true';
  return (
    <ThemeProvider attribute="class">
      {underMaintenance ? <Maintenance /> : <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default App
