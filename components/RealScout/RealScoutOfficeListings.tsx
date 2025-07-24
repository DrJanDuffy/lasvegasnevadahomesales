interface RealScoutOfficeListingsProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export function RealScoutOfficeListings({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF,TC",
  priceMin,
  priceMax
}: RealScoutOfficeListingsProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings 
          agent-encoded-id="${agentEncodedId}" 
          sort-order="${sortOrder}" 
          listing-status="${listingStatus}" 
          property-types="${propertyTypes}"
          ${priceMin ? `price-min="${priceMin}"` : ''}
          ${priceMax ? `price-max="${priceMax}"` : ''}
        ></realscout-office-listings>`
      }}
    />
  );
} 