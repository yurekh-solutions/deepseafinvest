import { NextRequest, NextResponse } from 'next/server';
import { handleApiError } from '@/lib/api-error';

// Dynamic import to avoid build-time errors
async function getDB() {
  const { default: connectDB } = await import('@/lib/mongodb');
  const { default: Lead } = await import('@/lib/models/Lead');
  await connectDB();
  return { Lead };
}

export async function POST(req: NextRequest) {
  try {
    const { Lead } = await getDB();
    const body = await req.json();
    const { name, email, phone, message, source, pageSource, device, type } = body;

    // Create lead (no required fields - supports WhatsApp/Phone click tracking)
    const lead = await Lead.create({
      name: name || 'Anonymous',
      email: email || '',
      phone: phone || '',
      message,
      source: source || 'website',
      type: type || 'form',
      pageSource,
      device,
      status: 'new',
    });

    return NextResponse.json(
      { message: 'Lead created successfully', lead },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET(req: NextRequest) {
  try {
    const { Lead } = await getDB();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const source = searchParams.get('source');
    const type = searchParams.get('type');

    const query: Record<string, string> = {};
    if (status) query.status = status;
    if (source) query.source = source;
    if (type) query.type = type;

    const leads = await Lead.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
