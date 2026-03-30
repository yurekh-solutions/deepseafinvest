/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: 'DEEPSEA FINVEST',
  description: 'Qualified & Unbiased Wealth Management',
  tagline: 'Mumbai-Based Trusted Wealth Management Firm',
  foundedYear: 2011,
  email: 'info@deepseafinvest.com',
  phone: '+91 706 000 6067',
  phoneRaw: '917060006067',
  address: {
    company: 'Deepsea Finvest Pvt Ltd',
    line1: '510, A wing, Express Zone,',
    line2: 'Western Express Highway,',
    line3: 'Opposite Oberoi mall,',
    line4: 'Malad East, Mumbai 400097',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890123!2d72.12345678901234!3d19.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
  },
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
