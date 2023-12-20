import React from 'react'
import { styles } from '../resource'
import { Orders } from '.'

export default function Desktop() {
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
