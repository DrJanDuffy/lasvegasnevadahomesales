import { sql } from '@vercel/postgres'

export const databaseConfig = {
  // Database connection settings
  connection: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === 'production',
  },

  // Table schemas
  tables: {
    leads: {
      name: 'leads',
      columns: {
        id: 'SERIAL PRIMARY KEY',
        firstName: 'VARCHAR(100) NOT NULL',
        lastName: 'VARCHAR(100) NOT NULL',
        email: 'VARCHAR(255) NOT NULL',
        phone: 'VARCHAR(20)',
        message: 'TEXT',
        source: 'VARCHAR(100) NOT NULL',
        pageUrl: 'VARCHAR(500)',
        propertyAddress: 'VARCHAR(500)',
        propertyType: 'VARCHAR(100)',
        budget: 'VARCHAR(100)',
        timeline: 'VARCHAR(100)',
        estimatedValue: 'VARCHAR(100)',
        bedrooms: 'VARCHAR(10)',
        bathrooms: 'VARCHAR(10)',
        squareFootage: 'VARCHAR(20)',
        utmSource: 'VARCHAR(100)',
        utmMedium: 'VARCHAR(100)',
        utmCampaign: 'VARCHAR(100)',
        ipAddress: 'VARCHAR(45)',
        userAgent: 'TEXT',
        createdAt: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        updatedAt: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        status: 'VARCHAR(50) DEFAULT \'new\'',
        assignedTo: 'VARCHAR(100)',
        notes: 'TEXT',
      }
    },
    properties: {
      name: 'properties',
      columns: {
        id: 'SERIAL PRIMARY KEY',
        address: 'VARCHAR(500) NOT NULL',
        neighborhood: 'VARCHAR(100)',
        price: 'DECIMAL(12,2)',
        bedrooms: 'INTEGER',
        bathrooms: 'DECIMAL(3,1)',
        squareFootage: 'INTEGER',
        propertyType: 'VARCHAR(100)',
        status: 'VARCHAR(50) DEFAULT \'active\'',
        description: 'TEXT',
        images: 'JSONB',
        createdAt: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        updatedAt: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
      }
    },
    interactions: {
      name: 'interactions',
      columns: {
        id: 'SERIAL PRIMARY KEY',
        leadId: 'INTEGER REFERENCES leads(id)',
        type: 'VARCHAR(50) NOT NULL',
        description: 'TEXT',
        timestamp: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        agentId: 'VARCHAR(100)',
      }
    }
  },

  // Lead status options
  leadStatus: {
    NEW: 'new',
    CONTACTED: 'contacted',
    QUALIFIED: 'qualified',
    PROPOSAL: 'proposal',
    NEGOTIATION: 'negotiation',
    CLOSED: 'closed',
    LOST: 'lost',
  },

  // Interaction types
  interactionTypes: {
    EMAIL_SENT: 'email_sent',
    PHONE_CALL: 'phone_call',
    MEETING: 'meeting',
    PROPERTY_VIEWING: 'property_viewing',
    OFFER_MADE: 'offer_made',
    OFFER_ACCEPTED: 'offer_accepted',
    OFFER_REJECTED: 'offer_rejected',
    CLOSING: 'closing',
  }
}

// Database helper functions
export const dbHelpers = {
  // Create leads table
  async createLeadsTable() {
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id SERIAL PRIMARY KEY,
          firstName VARCHAR(100) NOT NULL,
          lastName VARCHAR(100) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20),
          message TEXT,
          source VARCHAR(100) NOT NULL,
          pageUrl VARCHAR(500),
          propertyAddress VARCHAR(500),
          propertyType VARCHAR(100),
          budget VARCHAR(100),
          timeline VARCHAR(100),
          estimatedValue VARCHAR(100),
          bedrooms VARCHAR(10),
          bathrooms VARCHAR(10),
          squareFootage VARCHAR(20),
          utmSource VARCHAR(100),
          utmMedium VARCHAR(100),
          utmCampaign VARCHAR(100),
          ipAddress VARCHAR(45),
          userAgent TEXT,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          status VARCHAR(50) DEFAULT 'new',
          assignedTo VARCHAR(100),
          notes TEXT
        )
      `
      console.log('Leads table created successfully')
    } catch (error) {
      console.error('Error creating leads table:', error)
      throw error
    }
  },

  // Insert a new lead
  async insertLead(leadData: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    message?: string
    source: string
    pageUrl?: string
    propertyAddress?: string
    propertyType?: string
    budget?: string
    timeline?: string
    estimatedValue?: string
    bedrooms?: string
    bathrooms?: string
    squareFootage?: string
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    ipAddress?: string
    userAgent?: string
  }) {
    try {
      const result = await sql`
        INSERT INTO leads (
          firstName, lastName, email, phone, message, source, pageUrl,
          propertyAddress, propertyType, budget, timeline, estimatedValue,
          bedrooms, bathrooms, squareFootage, utmSource, utmMedium, utmCampaign,
          ipAddress, userAgent
        ) VALUES (
          ${leadData.firstName}, ${leadData.lastName}, ${leadData.email},
          ${leadData.phone || null}, ${leadData.message || null}, ${leadData.source},
          ${leadData.pageUrl || null}, ${leadData.propertyAddress || null},
          ${leadData.propertyType || null}, ${leadData.budget || null},
          ${leadData.timeline || null}, ${leadData.estimatedValue || null},
          ${leadData.bedrooms || null}, ${leadData.bathrooms || null},
          ${leadData.squareFootage || null}, ${leadData.utmSource || null},
          ${leadData.utmMedium || null}, ${leadData.utmCampaign || null},
          ${leadData.ipAddress || null}, ${leadData.userAgent || null}
        ) RETURNING id
      `
      return result.rows[0]?.id
    } catch (error) {
      console.error('Error inserting lead:', error)
      throw error
    }
  },

  // Get leads by status
  async getLeadsByStatus(status: string, limit = 50) {
    try {
      const result = await sql`
        SELECT * FROM leads 
        WHERE status = ${status}
        ORDER BY createdAt DESC
        LIMIT ${limit}
      `
      return result.rows
    } catch (error) {
      console.error('Error getting leads by status:', error)
      throw error
    }
  },

  // Update lead status
  async updateLeadStatus(leadId: number, status: string, assignedTo?: string) {
    try {
      await sql`
        UPDATE leads 
        SET status = ${status}, 
            assignedTo = ${assignedTo || null},
            updatedAt = CURRENT_TIMESTAMP
        WHERE id = ${leadId}
      `
    } catch (error) {
      console.error('Error updating lead status:', error)
      throw error
    }
  },

  // Add interaction
  async addInteraction(leadId: number, type: string, description: string, agentId?: string) {
    try {
      await sql`
        INSERT INTO interactions (leadId, type, description, agentId)
        VALUES (${leadId}, ${type}, ${description}, ${agentId || null})
      `
    } catch (error) {
      console.error('Error adding interaction:', error)
      throw error
    }
  },

  // Get lead with interactions
  async getLeadWithInteractions(leadId: number) {
    try {
      const leadResult = await sql`
        SELECT * FROM leads WHERE id = ${leadId}
      `
      
      const interactionsResult = await sql`
        SELECT * FROM interactions 
        WHERE leadId = ${leadId}
        ORDER BY timestamp DESC
      `
      
      return {
        lead: leadResult.rows[0],
        interactions: interactionsResult.rows
      }
    } catch (error) {
      console.error('Error getting lead with interactions:', error)
      throw error
    }
  },

  // Search leads
  async searchLeads(query: string, limit = 20) {
    try {
      const result = await sql`
        SELECT * FROM leads 
        WHERE 
          firstName ILIKE ${`%${query}%`} OR
          lastName ILIKE ${`%${query}%`} OR
          email ILIKE ${`%${query}%`} OR
          propertyAddress ILIKE ${`%${query}%`}
        ORDER BY createdAt DESC
        LIMIT ${limit}
      `
      return result.rows
    } catch (error) {
      console.error('Error searching leads:', error)
      throw error
    }
  }
}

// Analytics helper functions
export const analyticsHelpers = {
  // Get lead conversion rates
  async getLeadConversionRates(days = 30) {
    try {
      const result = await sql`
        SELECT 
          status,
          COUNT(*) as count,
          ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
        FROM leads 
        WHERE createdAt >= NOW() - INTERVAL '${days} days'
        GROUP BY status
        ORDER BY count DESC
      `
      return result.rows
    } catch (error) {
      console.error('Error getting lead conversion rates:', error)
      throw error
    }
  },

  // Get leads by source
  async getLeadsBySource(days = 30) {
    try {
      const result = await sql`
        SELECT 
          source,
          COUNT(*) as count,
          ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
        FROM leads 
        WHERE createdAt >= NOW() - INTERVAL '${days} days'
        GROUP BY source
        ORDER BY count DESC
      `
      return result.rows
    } catch (error) {
      console.error('Error getting leads by source:', error)
      throw error
    }
  },

  // Get daily lead counts
  async getDailyLeadCounts(days = 30) {
    try {
      const result = await sql`
        SELECT 
          DATE(createdAt) as date,
          COUNT(*) as count
        FROM leads 
        WHERE createdAt >= NOW() - INTERVAL '${days} days'
        GROUP BY DATE(createdAt)
        ORDER BY date DESC
      `
      return result.rows
    } catch (error) {
      console.error('Error getting daily lead counts:', error)
      throw error
    }
  }
} 