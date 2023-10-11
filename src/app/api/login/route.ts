import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { prisma } from '..'

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { email, password } = (await req.json()) as { email: string; password: string }
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
        return new NextResponse('Error', { status: 404 })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw NextResponse.json({ error: 'password not match' }, { status: 401 })
    }

    const token = jwt.sign({ email }, process.env.NODE_JWT_SECRET as string, {
        expiresIn: '2d'
    })

    return NextResponse.json({ token })
}
