import './globals.css'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ weight: ['400', '700'], style: ['normal'], subsets: ['latin'] })


export const metadata = {
  title: 'Github User Search App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}
