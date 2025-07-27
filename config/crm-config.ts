// CRM Configuration - Follow Up Boss
export const crmConfig = {
  followUpBoss: {
    apiKey: process.env.FOLLOW_UP_BOSS_API_KEY || '',
    baseUrl: 'https://api.followupboss.com/v1',
    endpoints: {
      people: '/people',
      events: '/events',
      notes: '/notes',
      tasks: '/tasks',
      properties: '/properties',
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from((process.env.FOLLOW_UP_BOSS_API_KEY || '') + ':').toString('base64')}`,
    },
  },
  
  // Lead Source Mapping
  leadSources: {
    'home-valuation': 'Home Valuation Page',
    'contact-form': 'Contact Page',
    'lead-capture-form': 'Lead Capture Form',
    'property-search': 'Property Search',
    'neighborhood-page': 'Neighborhood Page',
    'blog': 'Blog',
    'social-media': 'Social Media',
  },
  
  // Property Types Mapping
  propertyTypes: {
    'single-family': 'Single Family',
    'condo': 'Condo',
    'townhouse': 'Townhouse',
    'multi-family': 'Multi Family',
    'land': 'Land',
    'commercial': 'Commercial',
  },
  
  // Budget Ranges
  budgetRanges: {
    'under-300k': 'Under $300,000',
    '300k-500k': '$300,000 - $500,000',
    '500k-750k': '$500,000 - $750,000',
    '750k-1m': '$750,000 - $1,000,000',
    'over-1m': 'Over $1,000,000',
  },
  
  // Timeline Mapping
  timelines: {
    'immediately': 'Immediately',
    '1-3-months': '1-3 months',
    '3-6-months': '3-6 months',
    '6-12-months': '6-12 months',
    'just-looking': 'Just looking',
  },
};

// Follow Up Boss API Types
export interface FollowUpBossPerson {
  id?: string;
  firstName: string;
  lastName: string;
  emails?: Array<{ value: string; type?: string }>;
  phones?: Array<{ value: string; type?: string }>;
  addresses?: Array<{
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  }>;
  tags?: string[];
  source?: string;
  customFields?: Record<string, any>;
  notes?: string;
}

export interface FollowUpBossEvent {
  personId: string;
  type: string;
  note?: string;
  source?: string;
  customFields?: Record<string, any>;
}

export interface FollowUpBossTask {
  personId: string;
  type: string;
  dueDate?: string;
  note?: string;
  assignedTo?: string;
}

// Lead Data Interface
export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source: string;
  pageUrl?: string;
  userAgent?: string;
  ipAddress?: string;
} 