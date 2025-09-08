import type { Metadata } from 'next';
import { seoConfig } from '../config/seo-config';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lasvegasnevadahomesales.com'),
  title: {
    default: seoConfig.pages.home.title,
    template: `%s | ${seoConfig.site.name}`,
  },
  description: seoConfig.pages.home.description,
  keywords: seoConfig.pages.home.keywords,
  authors: [{ name: seoConfig.site.author }],
  creator: seoConfig.site.author,
  publisher: seoConfig.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: seoConfig.site.url,
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.openGraph.locale,
    url: seoConfig.site.url,
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    siteName: seoConfig.openGraph.siteName,
    images: [
      {
        url: '/opengraph-image',
        width: seoConfig.openGraph.imageWidth,
        height: seoConfig.openGraph.imageHeight,
        alt: 'Las Vegas Nevada Home Sales - Premier Real Estate Services',
        type: seoConfig.openGraph.imageType,
      },
    ],
  },
  twitter: {
    card: seoConfig.twitter.card as 'summary' | 'summary_large_image' | 'player' | 'app',
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.creator,
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: seoConfig.verification.google,
    yandex: seoConfig.verification.yandex,
    yahoo: seoConfig.verification.yandex, // Using yandex as placeholder
  },
  category: 'real estate',
  classification: 'business',
  other: {
    'theme-color': seoConfig.meta.themeColor,
    'msapplication-TileColor': seoConfig.meta.msTileColor,
    'apple-mobile-web-app-capable': seoConfig.meta.appleMobileWebAppCapable,
    'apple-mobile-web-app-status-bar-style': seoConfig.meta.appleMobileWebAppStatusBarStyle,
    'apple-mobile-web-app-title': seoConfig.meta.appleMobileWebAppTitle,
    'format-detection': seoConfig.meta.formatDetection,
    'mobile-web-app-capable': seoConfig.meta.mobileWebAppCapable,
    'msapplication-config': seoConfig.meta.msapplicationConfig,
  },
};

// Helper function to generate page-specific metadata
export function generatePageMetadata(page: keyof typeof seoConfig.pages): Metadata {
  const pageConfig = seoConfig.pages[page];

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    alternates: {
      canonical: `${seoConfig.site.url}${pageConfig.canonical}`,
    },
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.site.url}${pageConfig.canonical}`,
      images: [
        {
          url: pageConfig.ogImage,
          width: seoConfig.openGraph.imageWidth,
          height: seoConfig.openGraph.imageHeight,
          alt: pageConfig.title,
        },
      ],
    },
    twitter: {
      title: pageConfig.title,
      description: pageConfig.description,
      images: [pageConfig.ogImage],
    },
  };
}

// Specific page metadata generators
export const homeMetadata = generatePageMetadata('home');
export const propertiesMetadata = generatePageMetadata('properties');
export const summerlinMetadata = generatePageMetadata('summerlin');
export const hendersonMetadata = generatePageMetadata('henderson');
export const greenValleyMetadata = generatePageMetadata('greenValley');
export const downtownMetadata = generatePageMetadata('downtown');
export const homeValuationMetadata = generatePageMetadata('homeValuation');
export const marketReportsMetadata = generatePageMetadata('marketReports');
export const strategiesMetadata = generatePageMetadata('strategies');
export const contactMetadata = generatePageMetadata('contact');
