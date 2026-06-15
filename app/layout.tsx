import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pixelnest.co.za'),
  title: 'Pixelnest | Web & App Development Agency in Durban, South Africa',
  description: 'Pixelnest is a Durban-based web agency helping small businesses get online with professional websites and mobile apps. Affordable, fast, and reliable service.',
  keywords: ['web development', 'app development', 'Durban', 'South Africa', 'website design', 'mobile apps', 'UI/UX design'],
  authors: [{ name: 'Pixelnest' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Pixelnest | Web & App Development Agency',
    description: 'Professional websites and mobile apps for South African businesses',
    type: 'website',
    images: ['/apple-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
