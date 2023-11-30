import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Next App',
  description: '测试demo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>
        {children}
      </body>
    </html>
  )
}
