import React from 'react'
import { Locales } from '@/types/locales'
import { commonStyles } from '@/app/common/resource'
import { Footer, Header } from '@/app/common'

export default function layout({ children, params }: { children: React.ReactNode; params: { lang: Locales } }) {
    const locale = params.lang

    return (
        <div>
            <main className={commonStyles.screen}>
                <Header locale={locale} />
                <section className={commonStyles.section}>{children}</section>
            </main>
            <Footer />
        </div>
    )
}
