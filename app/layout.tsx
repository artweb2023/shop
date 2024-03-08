import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globalStyles/globals.css'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Фермерское мясо',
  description: 'Магазин Фермерского мяса',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
