import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Las Vegas Nevada Home Sales',
    short_name: 'LV Home Sales',
    description:
      'Premier real estate services in Las Vegas, Nevada. Find your dream home in Summerlin, Henderson, Green Valley, and Downtown Las Vegas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A2540',
    theme_color: '#0A2540',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['business', 'real estate', 'shopping'],

    icons: [
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    screenshots: [
      {
        src: '/screenshots/desktop-1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Homepage - Desktop View',
      },
      {
        src: '/screenshots/mobile-1.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Homepage - Mobile View',
      },
      {
        src: '/screenshots/desktop-2.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Properties - Desktop View',
      },
      {
        src: '/screenshots/mobile-2.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Properties - Mobile View',
      },
    ],

    shortcuts: [
      {
        name: 'Search Properties',
        short_name: 'Search',
        description: 'Search for homes in Las Vegas',
        url: '/properties/search',
        icons: [
          {
            src: '/icons/search-96x96.png',
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Home Valuation',
        short_name: 'Value',
        description: "Get your home's current value",
        url: '/home-valuation',
        icons: [
          {
            src: '/icons/valuation-96x96.png',
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Contact Agent',
        short_name: 'Contact',
        description: 'Contact our real estate experts',
        url: '/contact',
        icons: [
          {
            src: '/icons/contact-96x96.png',
            sizes: '96x96',
          },
        ],
      },
    ],

    related_applications: [
      {
        platform: 'webapp',
        url: 'https://lasvegasnevadahomesales.com',
      },
    ],

    prefer_related_applications: false,
  };
}
