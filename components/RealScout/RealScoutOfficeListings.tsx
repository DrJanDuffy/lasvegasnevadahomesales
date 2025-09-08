'use client';

import { realScoutConfig } from '../../config/realscout-config';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function RealScoutOfficeListings({
  agentEncodedId = realScoutConfig.widgets.officeListings.agentEncodedId,
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF,TC',
  priceMin,
  priceMax,
  className = '',
  style = {},
}: RealScoutOfficeListingsProps) {
  return (
    <div
      className={`realscout-widget realscout-office-listings ${className}`}
      style={style}
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings 
          agent-encoded-id="${agentEncodedId}" 
          sort-order="${sortOrder}" 
          listing-status="${listingStatus}" 
          property-types="${propertyTypes}"
          ${priceMin ? `price-min="${priceMin}"` : ''}
          ${priceMax ? `price-max="${priceMax}"` : ''}
        ></realscout-office-listings>`,
      }}
    />
  );
}
