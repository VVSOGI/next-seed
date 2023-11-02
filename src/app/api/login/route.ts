import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { prisma } from '..'

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { email, password } = (await req.json()) as { email: string; password: string }

    return NextResponse.json('hello world')
}
