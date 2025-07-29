'use client'

import Link from 'next/link'
import { Button } from '../Button/Button'

interface FooterProps {
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Las Vegas Nevada Home Sales</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for buying and selling real estate in Las Vegas, Nevada. 
              Expert guidance, local knowledge, and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lasvegasnevadahomesales" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="https://www.linkedin.com/company/lasvegasnevadahomesales" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="https://www.instagram.com/lasvegasnevadahomesales" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="text-gray-300 hover:text-white transition-colors">
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-300 hover:text-white transition-colors">
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/market-reports" className="text-gray-300 hover:text-white transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/strategies" className="text-gray-300 hover:text-white transition-colors">
                  Real Estate Strategies
                </Link>
              </li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Areas</h4>
            <ul className="space-y-2">
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-300 hover:text-white transition-colors">
                  Summerlin
                </a>
              </li>
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-300 hover:text-white transition-colors">
                  Henderson
                </a>
              </li>
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-300 hover:text-white transition-colors">
                  Green Valley
                </a>
              </li>
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-300 hover:text-white transition-colors">
                  Downtown Las Vegas
                </a>
              </li>
              <li>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-300 hover:text-white transition-colors">
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
                  📞 <a href="tel:+17025001981" className="text-blue-400 hover:text-blue-300">
                    (702) 500-1981
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  📧 <a href="mailto:info@lasvegasnevadahomesales.com" className="text-blue-400 hover:text-blue-300">
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
              <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-400 hover:text-white transition-colors">
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
  )
} 