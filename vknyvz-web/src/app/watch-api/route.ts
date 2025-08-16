import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  try {
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/watch-api`;
    const params = new URLSearchParams();
    
    if (lat && lon) {
      params.append('lat', lat);
      params.append('lon', lon);
    }
    
    if (params.toString()) {
      apiUrl += `?${params.toString()}`;
    }
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' }, 
      { status: 500 }
    );
  }
}