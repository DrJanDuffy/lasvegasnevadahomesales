import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/twitter-image*',
        '/opengraph-image*',
        '/manifest.webmanifest',
        '/*?utm_*',
        '/*?replytocom=*',
        '/2019/',
        '/438/',
        '/contact-2',
        '/offer',
        '/9-facts-everyone-should-know-about-the-world/',
        '/secrets-your-parents-never-told-you-about-trees/',
        '/do-you-make-these-simple-mistakes-in-parenting/',
        '/easy-ways-you-can-turn-fruits-into-success/',
        '/little-known-facts-about-wildlife-and-why-they-matter/',
        '/this-here-is-a-twitter-embed-example/',
        '/never-lose-your-friendship-again/',
        '/rock-music-do-you-really-need-it-this-will-help-you-decide/',
        '/10-things-your-mom-should-have-taught-you-about-fashion/',
        '/take-advantage-of-different-weather-forecasts/',
        '/9-ridiculously-simple-ways-to-improve-your-friendship/',
        '/10-things-you-can-learn-about-fashion-from-walruses/',
        '/10-architecture-tricks-you-wish-you-knew-before/',
        '/master-the-art-of-making-great-coffee-with-these-6-tips/',
        '/instagram-embed-example-you-got-it/',
        '/the-sun-is-shinning-on-home-sellers-this-summer/',
      ],
    },
    sitemap: 'https://lasvegasnevadahomesales.com/sitemap.xml',
  }
}