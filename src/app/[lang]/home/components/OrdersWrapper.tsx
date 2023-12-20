'use client'

import React from 'react'
import { styles } from '../resource'
import { Orders } from '.'
import { Order } from '@/types/tickets'
import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'

interface Props {
    data: Order[]
    next: number
}

export default function OrdersWrapper({ data, next }: Props) {
    const { isMobile, isTablet, isDesktop } = useResponsiveScreen()

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

/**
 * sso를 높이기 위해서 css에 display none을 한 다음 검색 결과로 데이터를 받아올 수 있게끔만 하고
 * 실제 브라우저로 들어온 사용자에게는 노출하지 않는 방식으로 대응해봤는데 나쁘지 않은듯.
 */
