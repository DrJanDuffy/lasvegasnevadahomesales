'use client';

import { realScoutConfig } from '../../config/realscout-config';

interface RealScoutYourListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function RealScoutYourListings({
  agentEncodedId = realScoutConfig.widgets.yourListings.agentEncodedId,
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale,Sold',
  propertyTypes = '',
  priceMin,
  priceMax,
  className = '',
  style = {},
}: RealScoutYourListingsProps) {
  return (
    <div
      className={`realscout-widget realscout-your-listings ${className}`}
      style={style}
      dangerouslySetInnerHTML={{
        __html: `<realscout-your-listings 
          agent-encoded-id="${agentEncodedId}" 
          sort-order="${sortOrder}" 
          listing-status="${listingStatus}" 
          property-types="${propertyTypes}"
          ${priceMin ? `price-min="${priceMin}"` : ''}
          ${priceMax ? `price-max="${priceMax}"` : ''}
        ></realscout-your-listings>`,
      }}
    />
  );
}
