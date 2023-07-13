import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import GlobalContextProvider from '../contexts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const workSans = Work_Sans({
  subsets: ['latin', 'vietnamese'],
})

export const metadata: Metadata = {
  title: 'Shop Cake App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <GlobalContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  )
}
