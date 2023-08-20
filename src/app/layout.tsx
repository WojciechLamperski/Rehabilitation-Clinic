import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rehabilitacja Majowe',
  description: 'Klinika rehabilitacyjna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        
        <head />
        {/* <body className={inter.className}></body> */}
        <body id="body"  className={inter.className} >
        <div id="page-wrapper">
          < Header />
          <main className="main">
            
              {children}
          
          </main>
          <Footer />
          </div>
        </body>

      </html>
    </>
  )
}
