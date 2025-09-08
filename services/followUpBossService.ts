import {
  crmConfig,
  type FollowUpBossEvent,
  type FollowUpBossPerson,
  type FollowUpBossTask,
  type LeadData,
} from '../config/crm-config';

class FollowUpBossService {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = crmConfig.followUpBoss.baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${crmConfig.followUpBoss.apiKey}:`).toString('base64')}`,
    };
  }

  // Create or update a person in Follow Up Boss
  async createPerson(
    leadData: LeadData
  ): Promise<{ success: boolean; personId?: string; error?: string }> {
    try {
      const personData: FollowUpBossPerson = {
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        emails: [{ value: leadData.email, type: 'work' }],
        phones: leadData.phone ? [{ value: leadData.phone, type: 'mobile' }] : undefined,
        addresses: leadData.address
          ? [
              {
                street: leadData.address,
                city: leadData.city || 'Las Vegas',
                state: leadData.state || 'NV',
                zip: leadData.zip,
                country: 'US',
              },
            ]
          : undefined,
        tags: ['Website Lead', 'Las Vegas'],
        source:
          crmConfig.leadSources[leadData.source as keyof typeof crmConfig.leadSources] || 'Website',
        customFields: {
          budget: leadData.budget
            ? crmConfig.budgetRanges[leadData.budget as keyof typeof crmConfig.budgetRanges]
            : undefined,
          timeline: leadData.timeline
            ? crmConfig.timelines[leadData.timeline as keyof typeof crmConfig.timelines]
            : undefined,
          pageUrl: leadData.pageUrl,
          userAgent: leadData.userAgent,
          ipAddress: leadData.ipAddress,
        },
        notes: leadData.message ? `Additional Information: ${leadData.message}` : undefined,
      };

      const response = await fetch(`${this.baseUrl}${crmConfig.followUpBoss.endpoints.people}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(personData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Follow Up Boss API Error:', errorData);
        return { success: false, error: `API Error: ${response.status} ${response.statusText}` };
      }

      const result = (await response.json()) as any;
      return { success: true, personId: result.id };
    } catch (error) {
      console.error('Error creating person in Follow Up Boss:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Create an event for a person
  async createEvent(
    personId: string,
    eventData: Partial<FollowUpBossEvent>
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const event: FollowUpBossEvent = {
        personId,
        type: eventData.type || 'Website Form Submission',
        note: eventData.note,
        source: eventData.source || 'Website',
        customFields: eventData.customFields,
      };

      const response = await fetch(`${this.baseUrl}${crmConfig.followUpBoss.endpoints.events}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Follow Up Boss Event API Error:', errorData);
        return { success: false, error: `API Error: ${response.status} ${response.statusText}` };
      }

      return { success: true };
    } catch (error) {
      console.error('Error creating event in Follow Up Boss:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Create a task for follow-up
  async createTask(
    personId: string,
    taskData: Partial<FollowUpBossTask>
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const task: FollowUpBossTask = {
        personId,
        type: taskData.type || 'Follow Up',
        dueDate: taskData.dueDate || this.getDefaultDueDate(),
        note: taskData.note || 'New website lead - follow up required',
        assignedTo: taskData.assignedTo,
      };

      const response = await fetch(`${this.baseUrl}${crmConfig.followUpBoss.endpoints.tasks}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Follow Up Boss Task API Error:', errorData);
        return { success: false, error: `API Error: ${response.status} ${response.statusText}` };
      }

      return { success: true };
    } catch (error) {
      console.error('Error creating task in Follow Up Boss:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Search for existing person by email
  async findPersonByEmail(
    email: string
  ): Promise<{ success: boolean; person?: FollowUpBossPerson; error?: string }> {
    try {
      const response = await fetch(
        `${this.baseUrl}${crmConfig.followUpBoss.endpoints.people}?emails=${encodeURIComponent(email)}`,
        {
          method: 'GET',
          headers: this.headers,
        }
      );

      if (!response.ok) {
        return { success: false, error: `API Error: ${response.status} ${response.statusText}` };
      }

      const result = (await response.json()) as any;
      return { success: true, person: result.people?.[0] };
    } catch (error) {
      console.error('Error searching person in Follow Up Boss:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Process a complete lead submission
  async processLead(
    leadData: LeadData
  ): Promise<{ success: boolean; personId?: string; error?: string }> {
    try {
      // First, check if person already exists
      const searchResult = await this.findPersonByEmail(leadData.email);

      let personId: string;

      if (searchResult.success && searchResult.person) {
        // Person exists, update them
        personId = searchResult.person.id!;
        console.log('Existing person found, updating:', personId);
      } else {
        // Create new person
        const createResult = await this.createPerson(leadData);
        if (!createResult.success) {
          return createResult;
        }
        personId = createResult.personId!;
        console.log('New person created:', personId);
      }

      // Create event for the lead
      const eventResult = await this.createEvent(personId, {
        type: 'Website Lead',
        note: `Lead from ${leadData.source} - ${leadData.message || 'No additional message'}`,
        source: 'Website',
        customFields: {
          budget: leadData.budget,
          timeline: leadData.timeline,
          pageUrl: leadData.pageUrl,
        },
      });

      if (!eventResult.success) {
        console.warn('Failed to create event:', eventResult.error);
      }

      // Create follow-up task
      const taskResult = await this.createTask(personId, {
        type: 'Follow Up',
        note: `New lead from website - ${leadData.firstName} ${leadData.lastName} (${leadData.email})`,
        dueDate: this.getDefaultDueDate(),
      });

      if (!taskResult.success) {
        console.warn('Failed to create task:', taskResult.error);
      }

      return { success: true, personId };
    } catch (error) {
      console.error('Error processing lead:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Get default due date (24 hours from now)
  private getDefaultDueDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const iso = tomorrow.toISOString();
    return iso?.split('T')[0] || '';
  }
}

// Export singleton instance
export const followUpBossService = new FollowUpBossService();
