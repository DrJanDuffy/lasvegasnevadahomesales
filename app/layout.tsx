import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Las Vegas Nevada Home Sales",
  description: "Premier real estate services in Las Vegas, Nevada",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
