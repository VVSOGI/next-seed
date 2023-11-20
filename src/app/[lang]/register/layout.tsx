import React from 'react'
import { Locales } from '@/types/locales'
import { Footer, Header } from '../../common'

export default function layout({ children, params }: { children: React.ReactNode; params: { lang: Locales } }) {
    const locale = params.lang
    return (
        <div>
            <main className="h-screen">
                <Header locale={locale} />
                <section className="flex justify-center h-[calc(100vh-84px)] flex-col gap-8 px-48 max-lg:px-12">{children}</section>
            </main>
            <Footer />
        </div>
    )
}
