// RealScout Configuration
export const realScoutConfig = {
  // Agent Encoded ID - Replace with your actual RealScout agent ID
  agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',

  // Widget Configuration
  widgets: {
    homeValue: {
      agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',
    },
    officeListings: {
      agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',
      sortOrder: 'price-desc',
      listingStatus: 'active',
      propertyTypes: 'single-family,condo,townhouse',
      priceMin: '200000',
      priceMax: '2000000',
    },
    yourListings: {
      agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',
    },
    simpleSearch: {
      agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',
    },
    advancedSearch: {
      agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID || 'demo-agent-id',
    },
  },

  // API Configuration
  api: {
    baseUrl: 'https://api.realscout.com',
    version: 'v3',
  },

  // Widget Loading Configuration
  loading: {
    strategy: 'beforeInteractive' as const,
    type: 'module' as const,
  },
};

// RealScout Widget Types
export type RealScoutWidgetType =
  | 'home-value'
  | 'office-listings'
  | 'your-listings'
  | 'simple-search'
  | 'advanced-search';

// RealScout Widget Props Interface
export interface RealScoutWidgetProps {
  agentEncodedId?: string;
  className?: string;
  style?: React.CSSProperties;
}
