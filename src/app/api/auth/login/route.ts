import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { env } from '@/lib/env';
import { handleApiError, validateRequired } from '@/lib/api-error';

const JWT_SECRET = env.jwtSecret;

// Dynamic import to avoid build-time errors
async function getDB() {
  const { default: connectDB } = await import('@/lib/mongodb');
  const { default: Admin } = await import('@/lib/models/Admin');
  await connectDB();
  return { Admin };
}

export async function POST(req: NextRequest) {
  try {
    console.log('Login attempt started');
    const { Admin } = await getDB();
    console.log('Database connected');
    
    const body = await req.json();
    console.log('Request body:', body);
    validateRequired(body, ['username', 'password']);
    
    const { username, password } = body;

    // Find admin
    const admin = await Admin.findOne({ username });
    console.log('Admin found:', admin ? 'Yes' : 'No');
    
    if (!admin) {
      console.log('Admin not found for username:', username);
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password (plain text comparison)
    console.log('Verifying password...');
    const isPasswordValid = password === admin.password;
    console.log('Password valid:', isPasswordValid);
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return NextResponse.json(
      { message: 'Login successful', token },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return handleApiError(error);
  }
}
