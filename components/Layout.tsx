import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-8 pb-16 text-gray-900 dark:text-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout