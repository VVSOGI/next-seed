import { Locales } from '@/types/locales'
import { getOrders } from './api/getOrders'
import { commonStyles } from '@/app/common/resource'
import { Orders } from './components'

interface Props {
    params: { lang: Locales; page: string }
    searchParams: { page: string }
}

export default async function page({ params, searchParams }: Props) {
    const next = 0 + searchParams.page ? Number(searchParams.page) : 0 * 30
    const data = await getOrders()

    return (
        <section className="w-full">
            <div className={commonStyles.divider} />
            <div className={commonStyles.title}>Order</div>
            <Orders next={next} data={data} />
        </section>
    )
}
