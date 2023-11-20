import { commonStyles } from '@/app/common/resource'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className={commonStyles.divider} />
            <div className={commonStyles.title}>Other</div>
        </div>
    )
}

/**
 * iframe은 x-frame-options라는 설정으로 사이트가 제한되어 있을 수 있음.
 * 따라서 사이트 의도에 맞게 몇 가지 버튼으로 x-frame-options라는 설정이 걸려있지 않은 사이트들로만 제한해서 사용해야함.
 * 백엔드 프록시 서버를 사용하면 해결할 수 있음. 그러나 법적 문제가 있을 수 있음.
 * */
