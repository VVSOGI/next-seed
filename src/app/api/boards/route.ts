import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const res = await fetch('http://localhost:4000/boards', {
        next: {
            revalidate: 0
        }
    })

    if (res.ok) {
        const json = await res.json()
        return NextResponse.json(json)
    }

    return NextResponse.error()
}
