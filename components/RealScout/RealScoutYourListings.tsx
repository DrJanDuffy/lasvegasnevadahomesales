interface RealScoutYourListingsProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export function RealScoutYourListings({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale,Sold",
  propertyTypes = "",
  priceMin,
  priceMax
}: RealScoutYourListingsProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-your-listings 
          agent-encoded-id="${agentEncodedId}" 
          sort-order="${sortOrder}" 
          listing-status="${listingStatus}" 
          property-types="${propertyTypes}"
          ${priceMin ? `price-min="${priceMin}"` : ''}
          ${priceMax ? `price-max="${priceMax}"` : ''}
        ></realscout-your-listings>`
      }}
    />
  );
} 