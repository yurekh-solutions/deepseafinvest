import { NextRequest, NextResponse } from 'next/server';
import { handleApiError, validateRequired } from '@/lib/api-error';

// Dynamic import to avoid build-time errors
async function getDB() {
  const { default: connectDB } = await import('@/lib/mongodb');
  const { default: Lead } = await import('@/lib/models/Lead');
  await connectDB();
  return { Lead };
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { Lead } = await getDB();
    
    const body = await req.json();
    
    // Update lead
    const lead = await Lead.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Lead updated successfully', lead },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { Lead } = await getDB();
    
    const lead = await Lead.findByIdAndDelete(params.id);

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Lead deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
