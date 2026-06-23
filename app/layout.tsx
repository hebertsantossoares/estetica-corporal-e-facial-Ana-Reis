import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio Ana Reis | Estética Corporal e Facial',
  description:
    'Massagem, depilação com cera, limpeza de pele e design de sobrancelhas. Beleza, cuidado e bem-estar em um só lugar. Agende pelo WhatsApp.',
  keywords: [
    'estética',
    'limpeza de pele',
    'depilação',
    'massagem',
    'design de sobrancelhas',
    'beleza',
    'Sorocaba',
  ],
}

export const viewport: Viewport = {
  themeColor: '#b8922a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body
        className={`${playfair.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
