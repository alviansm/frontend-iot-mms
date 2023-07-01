import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | 1/2 Ton Eco-Reefer Container',
  description: 'Internet of things dashboard for phase-change material hybrid refrigeration eco-reefer container',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
