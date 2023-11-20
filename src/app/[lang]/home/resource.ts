import { oneMobileOTFRegular, oneMobilePopOTF, oneMobileTitleOTF } from '@/fonts'

export const styles = {
    /** Layout */

    /** Page */
    orders: 'flex gap-4',
    ordersWrapper: 'flex flex-col flex-1',

    /** Order */
    noContents: `${oneMobilePopOTF.className} dark:text-slate-200 h-auto flex justify-center items-center text-base1 text-slate-800`,
    orderWrapper:
        'dark:hover:bg-gray-600 dark:active:bg-gray-700 hover:bg-gray-100 active:bg-gray-200 flex w-full h-fit cursor-pointer select-none flex-col gap-1 p-4 transition',
    orderTitleWrapper: 'flex items-center gap-4 text-base3',
    orderTitle: `${oneMobileTitleOTF.className} dark:text-slate-200 text-base1`,
    orderContents: `${oneMobileOTFRegular.className} dark:text-slate-200 text-base0`,
    orderEmail: `${oneMobileTitleOTF.className} dark:text-slate-200 text-base0 text-slate-800`,

    /** Icons */
    thumbUp: 'h-3 w-3 text-lime-500',
    thumbDown: 'h-3 w-3 text-red-500'
}
