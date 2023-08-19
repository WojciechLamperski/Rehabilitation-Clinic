import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
          <main className="main">
            <div id="page-wrapper">
              {children}
            </div>
          </main>
        </body>

      </html>
    </>
  )
}
