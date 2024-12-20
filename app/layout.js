import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Tabu oyunu',
  description: 'Tamamen ücretsiz, sade ve hızlı tabu oyunu',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer>
          <a target='_blank' href='https://safagayret.com'>
            Safa Gayret
          </a>{' '}
          tarafından geliştirildi.
        </footer>
      </body>
    </html>
  )
}
