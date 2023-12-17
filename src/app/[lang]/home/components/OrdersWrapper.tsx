'use client'

import React, { useEffect, useState } from 'react'
import { styles } from '../resource'
import { Orders } from '.'
import { Order } from '@/types/tickets'

interface Props {
    data: Order[]
    next: number
}

export default function OrdersWrapper({ data, next }: Props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading)
        return (
            <div>
                ...loading
                <div className="hidden">
                    <Orders data={data.slice(next, next + 30)} />
                </div>
            </div>
        )

    return (
        <div className={styles.orders}>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next, next + 10)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 10, next + 20)} />
            </div>
            <div className={styles.ordersWrapper}>
                <Orders data={data.slice(next + 20, next + 30)} />
            </div>
        </div>
    )
}
