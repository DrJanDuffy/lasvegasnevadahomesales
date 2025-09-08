'use client';

import { Button } from '../Button/Button';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Las Vegas Nevada Home Sales</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all things real estate in Las Vegas, Nevada. Expert guidance
              for buying, selling, and investing in properties.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+17025001981"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="mailto:info@lasvegasnevadahomesales.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Browse Properties
                </a>
              </li>
              <li>
                <a
                  href="/home-valuation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home Valuation
                </a>
              </li>
              <li>
                <a
                  href="/neighborhoods"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Neighborhoods
                </a>
              </li>
              <li>
                <a
                  href="/market-reports"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Market Reports
                </a>
              </li>
              <li>
                <a href="/strategies" className="text-gray-300 hover:text-white transition-colors">
                  Real Estate Strategies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Areas</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/neighborhoods/summerlin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Summerlin
                </a>
              </li>
              <li>
                <a
                  href="/neighborhoods/henderson"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Henderson
                </a>
              </li>
              <li>
                <a
                  href="/neighborhoods/green-valley"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Green Valley
                </a>
              </li>
              <li>
                <a
                  href="/neighborhoods/downtown"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Downtown Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/neighborhoods"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  View All Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-2">Ready to buy or sell?</p>
                <Button
                  href="/contact"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md text-sm font-semibold transition-colors"
                >
                  Contact Us
                </Button>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-2">Get your home's value</p>
                <Button
                  href="/home-valuation"
                  className="w-full bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md text-sm font-semibold transition-colors"
                >
                  Free Valuation
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-gray-300 text-sm">
                  📞{' '}
                  <a href="tel:+17025001981" className="text-blue-400 hover:text-blue-300">
                    (702) 500-1981
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  📧{' '}
                  <a
                    href="mailto:info@lasvegasnevadahomesales.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    info@lasvegasnevadahomesales.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Las Vegas Nevada Home Sales. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
