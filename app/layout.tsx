import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Time tracking dashboard',
  description: "Koala5617's FrontendMentor's Time Tracking Dashboard with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
