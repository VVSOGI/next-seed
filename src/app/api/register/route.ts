import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '..'
import bcrypt from 'bcrypt'

const passwordValidate = (password: string, checkPassword: string) => {
    return password === checkPassword
}

const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const saveUser = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password)
    await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    })
}

export async function GET(req: NextRequest) {
    return NextResponse.json('hello world')
}

export async function POST(req: NextRequest) {
    const { email, password, checkPassword } = (await req.json()) as { email: string; password: string; checkPassword: string }
    if (!passwordValidate(password, checkPassword)) {
        return NextResponse.json({ error: 'password not match' }, { status: 401 })
    }

    const isAlreadyExist = await prisma.user.findUnique({ where: { email } })
    if (isAlreadyExist) {
        return NextResponse.json({ error: 'email already exist' }, { status: 401 })
    }

    try {
        await saveUser(email, password)
        return NextResponse.json({ message: 'success' })
    } catch (error) {
        console.error('Error saving user:', error)
        return NextResponse.json({ error: 'something went wrong' }, { status: 500 })
    }
}
