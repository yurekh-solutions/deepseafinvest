/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: 'DEEPSEA FINVEST',
  description: 'Qualified & Unbiased Wealth Management',
  tagline: 'Mumbai-Based Trusted Wealth Management Firm',
  foundedYear: 2011,
  email: 'info@deepseafinvest.com',
  phone: '+91 91362 42706',
} as const;

export const LEAD_SOURCES = {
  WEBSITE: 'website',
  POPUP: 'popup',
  CONTACT_FORM: 'contact-form',
  WHATSAPP: 'whatsapp',
  CALCULATOR: 'calculator',
} as const;

export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  CONVERTED: 'converted',
  LOST: 'lost',
} as const;

export const SERVICES = [
  {
    id: 'bonds',
    title: 'High Yield Bonds',
    description: 'Secure fixed-income investments with attractive returns',
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    description: 'Diversified portfolio management for long-term growth',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Comprehensive protection for you and your family',
  },
  {
    id: 'equity',
    title: 'Equity Investments',
    description: 'Strategic stock market investments for wealth creation',
  },
  {
    id: 'alternatives',
    title: 'Alternative Investments',
    description: 'Unique opportunities beyond traditional asset classes',
  },
] as const;

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
  },
  LEADS: {
    BASE: '/api/leads',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  ABOUT: '/#about',
  SERVICES: '/#services',
  WHY_US: '/#why-choose-us',
} as const;
