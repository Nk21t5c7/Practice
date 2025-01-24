import { NextResponse } from 'next/server';

import mongoose from 'mongoose';
// ＠はsrcを指す
import User from '@/models/Users';
import 'dotenv/config'; 


export async function POST(request: Request) {
    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to test0122 database');
        const data = await request.json();

        const user = new User({
            name: data.name
        });

        await user.save();
        // ↑mongoDBに保存
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
    
    return NextResponse.json({ success: true });
}