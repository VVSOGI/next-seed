import { OrderType } from '@/types/tickets'
import axios from 'axios'
import { NextResponse } from 'next/server'

export const getOrders = async (): Promise<OrderType[] | any> => {
    try {
        const res = await axios.get(`${process.env.NODE_BACKEND_URL}/boards`)
        return res.data
    } catch (err: any) {
        if (err.cause?.code === 'ECONNREFUSED') {
            throw new Error(JSON.stringify({ message: 'Server is not working', statusCode: 500 }))
        }

        throw new Error(JSON.stringify({ message: err.response.data.message, statusCode: err.response.data.statusCode }))
    }
}
