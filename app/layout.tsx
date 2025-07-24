import "../styles/tailwind.css"
import "../styles/home-valuation.css"
import { Navigation } from "../components/Navigation/Navigation"
import { GoogleAnalytics } from "../components/Google/GoogleAnalytics"
import { GoogleTagManager, GoogleTagManagerBody } from "../components/Google/GoogleTagManager"
import { CoreWebVitals } from "../components/Google/CoreWebVitals"
import { SchemaMarkup } from "../components/Google/SchemaMarkup"
import { googleConfig } from "../config/google-config"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content={googleConfig.searchConsole.verificationCode} />
        
        {/* RealScout Components */}
        <script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module"
          async
          defer
        ></script>
        
        {/* Google Fonts Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        <style>
          {`
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
            
            realscout-simple-search {
              --rs-ss-font-primary-color: #726a6d;
              --rs-ss-searchbar-border-color: #1d6fbd;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
            }
            
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #ffffff;
              --rs-as-button-color: #1c71c3;
              --rs-as-widget-width: 500px !important;
            }
            
            realscout-your-listings {
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
            }
          `}
        </style>
      </head>
      <body>
        {/* Google Tag Manager */}
        <GoogleTagManager 
          containerId={googleConfig.gtm.containerId}
          enableDebug={googleConfig.analytics.enableDebug}
        />
        <GoogleTagManagerBody containerId={googleConfig.gtm.containerId} />
        
        {/* Google Analytics */}
        <GoogleAnalytics 
          measurementId={googleConfig.analytics.measurementId}
          enableEnhancedMeasurement={googleConfig.analytics.enableEnhancedMeasurement}
          enableEcommerce={googleConfig.analytics.enableEcommerce}
          enableDebug={googleConfig.analytics.enableDebug}
        />
        
        {/* Core Web Vitals */}
        <CoreWebVitals 
          enabled={googleConfig.webVitals.enabled}
          debug={googleConfig.webVitals.debug}
        />
        
        {/* Schema Markup */}
        <SchemaMarkup 
          agentName={googleConfig.schema.agentName}
          agentImage={googleConfig.schema.agentImage}
          phone={googleConfig.gmb.phone}
          email={googleConfig.gmb.email}
          address={googleConfig.gmb.address}
          businessName={googleConfig.schema.businessName}
          logo={googleConfig.schema.logo}
          website={googleConfig.schema.website}
          rating={googleConfig.schema.rating}
          reviewCount={googleConfig.schema.reviewCount}
          description={googleConfig.schema.description}
          primaryCategory={googleConfig.schema.primaryCategory}
          secondaryCategories={googleConfig.schema.secondaryCategories}
          openingHours={googleConfig.schema.openingHours}
        />
        
        <Navigation />
        {children}
      </body>
    </html>
  )
}
