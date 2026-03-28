/**
 * API error handling utilities
 */

import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message, details: error.details },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { error: 'An unexpected error occurred' },
    { status: 500 }
  );
}

export function validateRequired(
  data: Record<string, unknown>,
  fields: string[]
): void {
  const missing = fields.filter(field => !data[field]);

  if (missing.length > 0) {
    throw new ApiError(400, `Missing required fields: ${missing.join(', ')}`);
  }
}
