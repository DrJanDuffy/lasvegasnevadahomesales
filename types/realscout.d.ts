declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id': string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
    };
    'realscout-simple-search': {
      'agent-encoded-id'?: string;
    };
    'realscout-advanced-search': {
      'agent-encoded-id'?: string;
    };
    'realscout-your-listings': {
      'agent-encoded-id'?: string;
    };
    'realscout-home-value': {
      'agent-encoded-id': string;
    };
  }
} 