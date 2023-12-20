'use client'

import React from 'react'
import { Order } from '@/types/tickets'
import { useResponsiveScreen } from '@/app/hooks/useResponsiveScreen'
import Desktop from './Desktop'
import Tablet from './Tablet'
import Mobile from './Mobile'

interface Props {
    data: Order[]
    next: number
}

export default function OrdersWrapper({ data, next }: Props) {
    const { isMobile, isTablet, isDesktop } = useResponsiveScreen()
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
    }, [next])

    if (!loading)
        return (
            <>
                <div className="hidden">
                    <Mobile data={data} next={next} />
                </div>
            </>
        )

    if (isMobile) return <Mobile data={data} next={next} />

    if (isTablet) return <Tablet data={data} next={next} />

    if (isDesktop) return <Desktop data={data} next={next} />

    return <Desktop data={data} next={next} />
}

/**
 * sso를 높이기 위해서 css에 display none을 한 다음 검색 결과로 데이터를 받아올 수 있게끔만 하고
 * 실제 브라우저로 들어온 사용자에게는 노출하지 않는 방식으로 대응해봤는데 나쁘지 않은듯.
 */
