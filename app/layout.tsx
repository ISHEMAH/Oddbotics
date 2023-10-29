import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Oddbotics',
  description: 'Our platform provides you with advanced and user-friendly bot services to help you automate your business processes, improve customer engagement, and streamline your operations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
