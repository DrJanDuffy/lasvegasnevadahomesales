'use client';

import { useState } from 'react';
import { Button } from '../Button/Button';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  className = '',
  placeholder = 'Search homes by address, neighborhood, or zip code...',
  onSearch,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Track search interaction with Vercel Analytics
      if (typeof window !== 'undefined' && window.realEstateTracking?.trackNeighborhoodSearch) {
        window.realEstateTracking.trackNeighborhoodSearch(searchQuery.trim(), 'property_search');
      }

      // Track with Google Analytics as well
      if (typeof gtag !== 'undefined') {
        gtag('event', 'search', {
          event_category: 'property_search',
          event_label: searchQuery.trim(),
          value: 1,
        });
      }

      // Call onSearch callback if provided
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        // Default behavior: redirect to search results
        const searchParams = new URLSearchParams({
          q: searchQuery.trim(),
        });
        window.location.href = `/properties/search?${searchParams.toString()}`;
      }
    }
  };

  return (
    <div className={`search-bar ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Search Homes
          </button>
        </div>

        {/* Quick Search Suggestions */}
        {isExpanded && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Popular Searches:</div>
              <div className="space-y-1">
                {[
                  'Summerlin',
                  'Henderson',
                  'Green Valley',
                  'Downtown Las Vegas',
                  'Centennial Hills',
                ].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => {
                      setSearchQuery(area);
                      if (onSearch) onSearch(area);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors duration-150"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
