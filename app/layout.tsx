import "styles/tailwind.css"
import { Navigation } from "components/Navigation/Navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module"
          async
          defer
        ></script>
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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
