'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { SearchBar } from '../Search/SearchBar'

interface NavigationItem {
  href: string
  label: string
  description?: string
  children?: NavigationItem[]
  icon?: string
  badge?: string
}

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Enhanced navigation structure with dropdowns
  const navigationItems: NavigationItem[] = [
    { 
      href: '/', 
      label: 'Home',
      description: 'Welcome to Las Vegas Real Estate'
    },
    { 
      href: '/properties', 
      label: 'Properties',
      description: 'Browse homes for sale',
      children: [
        { href: '/properties', label: 'All Properties', description: 'View all listings' },
        { href: '/properties/search', label: 'Advanced Search', description: 'Find your perfect home' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Single Family', description: 'Detached homes' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Condos', description: 'Low-maintenance living' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Luxury Homes', description: 'Premium properties' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Investment', description: 'Rental properties' },
      ]
    },
    { 
      href: '/home-valuation', 
      label: 'Home Value',
      description: 'Get your home\'s worth',
      children: [
        { href: '/home-valuation', label: 'Free Valuation', description: 'Instant home value estimate' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Detailed Report', description: 'Comprehensive analysis' },
        { href: '/market-reports', label: 'Market Reports', description: 'Local market insights' },
      ]
    },
    { 
      href: '/neighborhoods', 
      label: 'Neighborhoods',
      description: 'Explore Las Vegas areas',
      children: [
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Summerlin', description: 'Luxury master-planned community' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Henderson', description: 'Family-friendly city' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Green Valley', description: 'Affordable family homes' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Downtown', description: 'Urban living & entertainment' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'All Areas', description: 'Complete neighborhood guide' },
      ]
    },
    { 
      href: '/strategies', 
      label: 'Resources',
      description: 'Real estate strategies & tips',
      children: [
        { href: '/strategies', label: 'Buying Guide', description: 'How to buy a home' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Selling Guide', description: 'How to sell your home' },
        { href: 'http://drjanduffy.realscout.com/onboarding', label: 'Investment Guide', description: 'Real estate investing' },
        { href: '/market-reports', label: 'Market Reports', description: 'Latest market data' },
        { href: '/blog', label: 'Blog', description: 'Real estate insights' },
      ]
    },
    { 
      href: '/contact', 
      label: 'Contact',
      description: 'Get in touch with us'
    },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      // Cleanup timeout on unmount
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const handleSearch = (query: string) => {
    // Navigate to search results
    window.location.href = `/properties/search?q=${encodeURIComponent(query)}`
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LV</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                    Las Vegas Real Estate
                  </span>
                  <div className="text-xs text-gray-500 -mt-1">Your Trusted Partner</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative" ref={dropdownRef}>
                {item.children ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={(e) => {
                      // Check if we're moving to the dropdown content
                      const relatedTarget = e.relatedTarget as HTMLElement
                      if (!e.currentTarget.contains(relatedTarget)) {
                        // Add a small delay to allow moving to dropdown
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null)
                        }, 100)
                      }
                    }}
                  >
                    <button className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                      isActive(item.href)
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}>
                      <span>{item.label}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.href && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => {
                          // Clear any pending timeout
                          if (dropdownTimeoutRef.current) {
                            clearTimeout(dropdownTimeoutRef.current)
                            dropdownTimeoutRef.current = null
                          }
                          setActiveDropdown(item.href)
                        }}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                            >
                              <div className="flex-1">
                                <div className="font-medium">{child.label}</div>
                                <div className="text-xs text-gray-500">{child.description}</div>
                              </div>
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Phone Number */}
            <a
              href="tel:+17025001981"
              className="hidden xl:flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(702) 500-1981</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/home-valuation"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Home Value
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search homes by address, neighborhood, or zip code..."
              className="max-w-2xl mx-auto"
            />
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                      className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                        isActive(item.href)
                          ? 'text-blue-900 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.href ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeDropdown === item.href && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/home-valuation"
                className="block w-full bg-blue-600 text-white px-4 py-3 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Get Free Home Valuation
              </Link>
              <a
                href="tel:+17025001981"
                className="block w-full mt-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-md text-center font-medium hover:bg-gray-200 transition-colors"
              >
                📞 Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 