/**
 * Type-safe API client for frontend
 */

import type { ApiResponse, CreateLeadRequest, LoginRequest, LoginResponse, Lead } from '@/types';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.error || 'An error occurred',
        };
      }

      return { data };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Auth
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return this.request<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Leads
  async createLead(lead: CreateLeadRequest): Promise<ApiResponse<{ lead: Lead }>> {
    return this.request<{ lead: Lead }>('/api/leads', {
      method: 'POST',
      body: JSON.stringify(lead),
    });
  }

  async getLeads(params?: {
    status?: string;
    source?: string;
  }): Promise<ApiResponse<{ leads: Lead[] }>> {
    const searchParams = new URLSearchParams(
      params as Record<string, string>
    ).toString();
    const url = `/api/leads${searchParams ? `?${searchParams}` : ''}`;
    return this.request<{ leads: Lead[] }>(url);
  }
}

export const apiClient = new ApiClient();
