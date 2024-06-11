import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import Providers from './providers'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omer Saif Kazi | Portfolio',
  description: 'Portfolio - Omer Saif kazi',
  verification: {
    google: 'FzDKmqT9zHpnxxdoqVt0AfS8pPK1z1xyd61YdWFLOBU'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HEAD>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content="https://www.omersaifkazi.cloud/src/app/screenshot.png" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </HEAD>
      <body className={saira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
