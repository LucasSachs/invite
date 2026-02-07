import { openSans } from '@/lib/fonts'
import type { Metadata } from 'next'
import '../config/globals.css'

export const metadata: Metadata = {
  title: 'Invite form',
  description: 'Developed by Lucas Sachs, with a Rocketseat design',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  )
}
