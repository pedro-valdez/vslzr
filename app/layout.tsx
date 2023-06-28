import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'vslzr',
  description: 'Creative coding sketches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" date-theme="black">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
