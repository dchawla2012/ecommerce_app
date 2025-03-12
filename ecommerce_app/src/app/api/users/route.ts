import { NextResponse } from 'next/server';
import User from '../../../../models/User';

export async function GET() {
    try {
        const users = await User.findAll();
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newUser = await User.create(data);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}