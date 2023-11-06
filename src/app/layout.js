import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export const metadata = {
  title: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#070707]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
