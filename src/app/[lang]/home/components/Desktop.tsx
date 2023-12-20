'use client'

import React from 'react'
import { styles } from '../resource'
import { Orders } from '.'
import { Order } from '@/types/tickets'

interface Props {
    data: Order[]
    next: number
}

export default function Desktop({ data, next }: Props) {
    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next, next + 5)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 5, next + 10)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 10, next + 15)} />
            </div>
        </div>
    )
}
