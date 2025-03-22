import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongoose';

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({ success: true, message: 'Connected to MongoDB successfully' });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to connect to MongoDB' },
            { status: 500 }
        );
    }
}
