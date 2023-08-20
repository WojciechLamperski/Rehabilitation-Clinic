import './globals.css'
import type { Metadata } from 'next'
import HeadContent from '@/components/HeadContent/headContent'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/Footer'
import { Ubuntu } from 'next/font/google'


const roboto = Ubuntu({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
        <body id="body"  className={roboto.className} >
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
