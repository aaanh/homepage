import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://photos.aaanh.com/api/photos?year=2025');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
  }
} 