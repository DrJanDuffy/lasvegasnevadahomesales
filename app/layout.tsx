import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/tailwind.css';
import '../styles/home-valuation.css';
import '../styles/realscout-widgets.css';
import '../styles/homebot-widgets.css';
import Script from 'next/script';
import { VercelAnalytics } from '../components/Analytics/VercelAnalytics';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import { SEODashboard } from '../components/SEO/SEODashboard';
import {
  organizationSchema,
  StructuredData,
  websiteSchema,
} from '../components/SEO/StructuredData';
import { metadata as siteMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="beforeInteractive"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
              width: 100% !important;
              max-width: 100%;
              display: block;
              margin: 0 auto;
            }
            realscout-your-listings {
              width: 100%;
            }
            realscout-simple-search {
              width: 100%;
            }
            realscout-advanced-search {
              width: 100%;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData data={websiteSchema} />
        <StructuredData data={organizationSchema} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SEODashboard
          pageUrl="/"
          pageTitle="Las Vegas Nevada Home Sales"
          targetKeywords={[
            'Las Vegas Nevada Home Sales',
            'Las Vegas real estate',
            'Summerlin homes for sale',
            'Henderson real estate',
            'Las Vegas homes for sale',
            'Nevada real estate',
          ]}
          debug={process.env.NODE_ENV === 'development'}
        />
        <VercelAnalytics
          mode={process.env.NODE_ENV === 'production' ? 'production' : 'development'}
          debug={process.env.NODE_ENV === 'development'}
        />
      </body>
    </html>
  );
}
