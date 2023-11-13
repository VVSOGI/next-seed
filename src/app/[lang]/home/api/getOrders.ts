import { Order } from '@/types/tickets'

export const getOrders = async (): Promise<Order[]> => {
    const res = await fetch('http://localhost:4000/boards', {
        next: {
            revalidate: 0
        }
    })

    if (res.ok) {
        const json = await res.json()
        return json
    }

    throw new Error(JSON.stringify(await res.json()))
}
