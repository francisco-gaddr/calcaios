import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    // Test database connection
    await connectDB();
    
    return NextResponse.json(
      { message: "Hello World! Database connected successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { error: "Failed to connect to databasee" },
      { status: 500 }
    );
  }
} 