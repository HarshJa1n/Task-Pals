import { NextResponse } from 'next/server';
import { getData } from '@/lib/data';

export async function GET() {
  try {
    const data = await getData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 