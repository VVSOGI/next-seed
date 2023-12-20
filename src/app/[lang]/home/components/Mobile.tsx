import { Order } from '@/types/tickets'
import React from 'react'
import { Orders } from '.'
import { styles } from '../resource'

interface Props {
    data: Order[]
    next: number
}

export default function Mobile({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 0, next + 3)} />
            </div>
        </div>
    )
}
