/**
 * Validation utilities
 */

export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    // Indian phone number validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  },

  required: (value: unknown): boolean => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },
};

export function validateEmail(email: string): string | null {
  if (!validators.required(email)) {
    return 'Email is required';
  }
  if (!validators.email(email)) {
    return 'Invalid email format';
  }
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!validators.required(phone)) {
    return 'Phone number is required';
  }
  if (!validators.phone(phone)) {
    return 'Invalid phone number format';
  }
  return null;
}

export function validateName(name: string): string | null {
  if (!validators.required(name)) {
    return 'Name is required';
  }
  if (!validators.minLength(name, 2)) {
    return 'Name must be at least 2 characters';
  }
  if (!validators.maxLength(name, 100)) {
    return 'Name must be less than 100 characters';
  }
  return null;
}
