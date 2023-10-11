import React from 'react'
import { Locales } from '@/types/locales'
import { Footer, Header } from '../common'

export default function layout({ children, params }: { children: React.ReactNode; params: { lang: Locales } }) {
    const locale = params.lang

    return (
        <div>
            <main>
                <Header locale={locale} />
                <section>{children}</section>
            </main>
            <Footer />
        </div>
    )
}
