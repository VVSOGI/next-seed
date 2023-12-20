import { Order } from '@/types/tickets'
import React from 'react'
import { styles } from '../resource'
import { Orders } from '.'

interface Props {
    data: Order[]
    next: number
}

export default function Tablet({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 5, next + 15)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 15, next + 30)} />
            </div>
        </div>
    )
}
