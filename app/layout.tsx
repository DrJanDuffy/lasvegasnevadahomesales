import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "../components/Navigation/Navigation"
import { StructuredData } from "../components/SEO/StructuredData"
import { websiteSchema, organizationSchema } from "../components/SEO/StructuredData"
import { SEODashboard } from "../components/SEO/SEODashboard"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Las Vegas Nevada Home Sales | Your Trusted Real Estate Experts",
  description: "Las Vegas Nevada Home Sales offers expert real estate services in Las Vegas, Summerlin, Henderson, and all of Nevada. Find your dream home or sell your property with confidence.",
  keywords: "Las Vegas Nevada Home Sales, Las Vegas real estate, Nevada homes for sale, Summerlin homes, Henderson real estate, Las Vegas realtor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData data={websiteSchema} />
        <StructuredData data={organizationSchema} />
        <Navigation />
        <main>{children}</main>
        <SEODashboard 
          pageUrl="/"
          pageTitle="Las Vegas Nevada Home Sales"
          targetKeywords={[
            "Las Vegas Nevada Home Sales",
            "Las Vegas real estate",
            "Summerlin homes for sale",
            "Henderson real estate",
            "Las Vegas homes for sale",
            "Nevada real estate"
          ]}
          debug={process.env.NODE_ENV === 'development'}
        />
      </body>
    </html>
  )
}
