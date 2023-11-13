'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Message {
    statusCode: number
    message: string
    error: string
}

export default function Error({ error }: any) {
    const [message, setMessage] = useState<Message>()
    const router = useRouter()

    useEffect(() => {
        const res = JSON.parse(error.message)
        setMessage(res)
    }, [])

    return (
        <div className="grid h-screen px-4 place-content-center">
            <div className="text-center -translate-y-[5rem]">
                <h1 className="font-black text-gray-200 text-[40px]">{message?.statusCode}</h1>

                <p className="lg:text-[100px] dark:text-gray-400 text-[72px] font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {message?.error}
                </p>

                <p className="mt-4 text-gray-500 text-[24px]">{message?.message}</p>

                <button
                    onClick={() => router.push('/home')}
                    type="button"
                    className="lg:w-96 w-full inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Move to home
                </button>
            </div>
        </div>
    )
}
