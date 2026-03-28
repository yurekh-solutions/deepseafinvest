/**
 * Shared TypeScript type definitions
 */

export interface Lead {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  source: 'website' | 'popup' | 'contact-form' | 'whatsapp' | 'calculator';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  message?: string;
  pageSource?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Admin {
  _id?: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source?: Lead['source'];
  pageSource?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
