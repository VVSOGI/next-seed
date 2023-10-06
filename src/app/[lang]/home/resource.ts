import { oneMobileOTFRegular, oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const styles = {
    screen: 'h-auto min-h-[100vh]',
    section: 'container flex flex-col gap-8 mb-10',

    /** Page */
    divider: 'mb-6 border-t border-t-gray-200',
    title: 'mb-6 text-base4 font-bold',
    ordersWrapper: 'lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-4',

    /** Order */
    noContents: `${oneMobilePopOTF.className} dark:text-slate-200 h-[30rem] flex justify-center items-center text-base1 text-slate-800`,
    orderWrapper:
        'dark:hover:bg-gray-600 dark:active:bg-gray-700 hover:bg-gray-100 active:bg-gray-200 flex w-fit h-fit cursor-pointer select-none flex-col gap-1 p-4 transition',
    orderTitleWrapper: 'flex items-center gap-4 text-base3',
    orderTitle: `${oneMobileTitleOTF.className} dark:text-slate-200 text-base1`,
    orderContents: `${oneMobileOTFRegular.className} dark:text-slate-200 text-base0`,
    orderEmail: `${oneMobileTitleOTF.className} dark:text-slate-200 text-base0 text-slate-800`,

    /** Icons */
    thumbUp: 'h-3 w-3 text-lime-500',
    thumbDown: 'h-3 w-3 text-red-500'
}
