import { Order } from '@/types/tickets'
import React, { createContext, useState } from 'react'

export interface OrdersContext {
    data: Order[]
    setData: React.Dispatch<React.SetStateAction<Order[]>>
}

const OrdersContext = createContext<OrdersContext | null>(null)

export function OrdersProvider({ children }: { children: React.ReactElement }) {
    const [data, setData] = useState<Order[]>([])

    return <OrdersContext.Provider value={{ data, setData }}>{children}</OrdersContext.Provider>
}

export default OrdersContext
