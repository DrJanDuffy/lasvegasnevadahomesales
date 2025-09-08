'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from 'react';

interface Property {
  id: string;
  title: string;
  price: string;
  address: string;
  lat: number;
  lng: number;
  type: 'listing' | 'sold' | 'neighborhood';
  image?: string;
}

interface GoogleMapsProps {
  apiKey?: string;
  className?: string;
  height?: string;
  showNeighborhoods?: boolean;
  showListings?: boolean;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export function GoogleMaps({
  apiKey = 'YOUR_API_KEY',
  className = '',
  height = '400px',
  showNeighborhoods = true,
  showListings = true,
  center = { lat: 36.1547, lng: -115.3267 }, // Downtown Summerlin
  zoom = 12,
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [_map, setMap] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Las Vegas neighborhoods data
  const neighborhoods = [
    {
      name: 'Downtown Summerlin',
      bounds: {
        north: 36.17,
        south: 36.14,
        east: -115.31,
        west: -115.34,
      },
      center: { lat: 36.1547, lng: -115.3267 },
    },
    {
      name: 'Red Rock Country Club',
      bounds: {
        north: 36.19,
        south: 36.16,
        east: -115.33,
        west: -115.36,
      },
      center: { lat: 36.175, lng: -115.345 },
    },
    {
      name: 'The Ridges',
      bounds: {
        north: 36.21,
        south: 36.18,
        east: -115.35,
        west: -115.38,
      },
      center: { lat: 36.195, lng: -115.365 },
    },
    {
      name: 'Henderson',
      bounds: {
        north: 36.05,
        south: 35.95,
        east: -114.9,
        west: -115.0,
      },
      center: { lat: 36.0, lng: -114.95 },
    },
  ];

  // Sample property data
  const properties: Property[] = [
    {
      id: '1',
      title: 'Luxury Summerlin Home',
      price: '$850,000',
      address: '123 Summerlin Dr, Las Vegas, NV',
      lat: 36.15,
      lng: -115.35,
      type: 'listing',
    },
    {
      id: '2',
      title: 'Henderson Family Home',
      price: '$650,000',
      address: '456 Henderson Ave, Henderson, NV',
      lat: 36.0,
      lng: -114.95,
      type: 'listing',
    },
    {
      id: '3',
      title: 'Green Valley Condo',
      price: '$425,000',
      address: '789 Green Valley Pkwy, Henderson, NV',
      lat: 36.015,
      lng: -115.0,
      type: 'sold',
    },
    {
      id: '4',
      title: 'Dr. Jan Duffy - Las Vegas Nevada Home Sales',
      price: 'Visit Our Office',
      address: '10980 W Charleston Blvd, Suite 180, Las Vegas, NV 89135',
      lat: 36.1547,
      lng: -115.3267,
      type: 'neighborhood',
    },
  ];

  useEffect(() => {
    if (!mapRef.current || !apiKey || apiKey === 'YOUR_API_KEY') {
      setIsLoading(false);
      return;
    }

    // Load Google Maps script
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current) return;

      const mapInstance = new (window as any).google.maps.Map(mapRef.current, {
        zoom,
        center,
        styles: getCustomMapStyles(),
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      setMap(mapInstance);
      setIsLoading(false);

      // Add neighborhood boundaries
      if (showNeighborhoods) {
        addNeighborhoodBoundaries(mapInstance);
      }

      // Add property markers
      if (showListings) {
        addPropertyMarkers(mapInstance);
      }

      // Add search box
      addSearchBox(mapInstance);
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      const script = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (script) {
        script.remove();
      }
    };
  }, [apiKey, center, zoom, showNeighborhoods, showListings]);

  const getCustomMapStyles = () => {
    return [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ];
  };

  const addNeighborhoodBoundaries = (mapInstance: any) => {
    neighborhoods.forEach((neighborhood) => {
      const _rectangle = new (window as any).google.maps.Rectangle({
        bounds: neighborhood.bounds,
        fillColor: '#3A8DDE',
        fillOpacity: 0.1,
        strokeColor: '#0A2540',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        map: mapInstance,
      });

      // Add neighborhood label
      new (window as any).google.maps.Marker({
        position: neighborhood.center,
        map: mapInstance,
        label: {
          text: neighborhood.name,
          className: 'neighborhood-label',
        },
        icon: {
          url:
            'data:image/svg+xml;charset=UTF-8,' +
            encodeURIComponent(`
            <svg width="100" height="30" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="30" fill="#0A2540" rx="15"/>
              <text x="50" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">${neighborhood.name}</text>
            </svg>
          `),
          scaledSize: new (window as any).google.maps.Size(100, 30),
        },
      });
    });
  };

  const addPropertyMarkers = (mapInstance: any) => {
    properties.forEach((property) => {
      const marker = new (window as any).google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map: mapInstance,
        title: property.title,
        icon: {
          url:
            property.type === 'sold'
              ? 'data:image/svg+xml;charset=UTF-8,' +
                encodeURIComponent(`
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#16B286"/>
                  <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">S</text>
                </svg>
              `)
              : 'data:image/svg+xml;charset=UTF-8,' +
                encodeURIComponent(`
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
                  <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">$</text>
                </svg>
              `),
          scaledSize: new (window as any).google.maps.Size(24, 24),
        },
      });

      // Add info window
      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px 0; color: #0A2540; font-size: 14px;">${property.title}</h3>
            <p style="margin: 0 0 5px 0; color: #FF6B35; font-weight: bold; font-size: 16px;">${property.price}</p>
            <p style="margin: 0; color: #666; font-size: 12px;">${property.address}</p>
            <p style="margin: 5px 0 0 0; color: #16B286; font-size: 11px; text-transform: uppercase;">${property.type}</p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });
    });
  };

  const addSearchBox = (mapInstance: any) => {
    const input = document.createElement('input');
    input.className = 'map-search-box';
    input.placeholder = 'Search Las Vegas neighborhoods...';
    input.style.cssText = `
      position: absolute;
      top: 10px;
      left: 10px;
      width: 300px;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      z-index: 1000;
    `;

    mapRef.current?.parentElement?.appendChild(input);

    const searchBox = new (window as any).google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;

      const bounds = new (window as any).google.maps.LatLngBounds();
      places.forEach((place: any) => {
        if (place.geometry?.location) {
          bounds.extend(place.geometry.location);
        }
      });
      mapInstance.fitBounds(bounds);
    });
  };

  if (isLoading) {
    return (
      <div className={`google-maps-loading ${className}`} style={{ height }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Las Vegas Map...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!apiKey || apiKey === 'YOUR_API_KEY') {
    return (
      <div className={`google-maps-placeholder ${className}`} style={{ height }}>
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-lg font-semibold text-[#0A2540] mb-2">Interactive Las Vegas Map</h3>
            <p className="text-gray-600 mb-4">
              Please provide your Google Maps API key to enable interactive mapping
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Key neighborhoods:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood.name}
                    className="px-2 py-1 bg-[#3A8DDE] text-white text-xs rounded"
                  >
                    {neighborhood.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`google-maps-container ${className}`}>
      <div ref={mapRef} className="google-maps" style={{ height, width: '100%' }} />
    </div>
  );
}
