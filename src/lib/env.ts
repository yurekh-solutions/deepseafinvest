/**
 * Environment variable validation and type-safe access
 */

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  
  // Don't throw during build time
  if (!value && process.env.NODE_ENV === 'production' && !process.env.NEXT_PHASE) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  
  return value || '';
}

export const env = {
  // Database
  mongodbUri: getEnvVar('MONGODB_URI'),
  
  // Authentication
  jwtSecret: getEnvVar('JWT_SECRET', 'dev-secret-change-in-production'),
  
  // Admin
  adminUsername: getEnvVar('ADMIN_USERNAME', 'admin'),
  adminPasswordHash: getEnvVar('ADMIN_PASSWORD_HASH'),
  
  // Contact
  whatsappNumber: getEnvVar('WHATSAPP_NUMBER', '919136242706'),
  
  // Site
  siteUrl: getEnvVar('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
  
  // Environment
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

// Validate critical env vars on startup
export function validateEnv() {
  const required = ['MONGODB_URI', 'JWT_SECRET'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0 && env.isProduction) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env file or environment configuration.'
    );
  }
}
