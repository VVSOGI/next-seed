import { Locales } from '@/types/locales'
import { Orders } from './components'
import { styles } from './resource'
import { getOrders } from './api/getOrders'
import { commonStyles } from '@/app/common/resource'

interface Props {
    params: { lang: Locales }
}

export default async function page({ params: { lang } }: Props) {
    // const data = await getOrders()

    return (
        <section>
            <div className={commonStyles.divider} />
            <div className={commonStyles.title}>Order</div>
            <div className={styles.orders}>
                <div className={styles.ordersWrapper}>{/* <Orders data={data.slice(2, 3)} /> */}</div>
                <div className={styles.ordersWrapper}>{/* <Orders data={data.slice(0, 2)} /> */}</div>
                <div className={styles.ordersWrapper}>{/* <Orders data={data.slice(1, 3)} /> */}</div>
            </div>
        </section>
    )
}
