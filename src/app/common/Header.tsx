import Link from 'next/link'
import { ThemeButton, commonStyles } from '.'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    return (
        <header className={commonStyles.headerWrapper}>
            <nav className={commonStyles.navbar}>
                <ul className={commonStyles.listWrapper}>
                    <li className={commonStyles.list}>
                        <Link className={commonStyles.listItem} href={`/${locale}/home`}>
                            Home
                        </Link>
                        <Link className={commonStyles.listItem} href={`/${locale}/boards`}>
                            Boards
                        </Link>
                        <Link className={commonStyles.listItem} href="/other">
                            Other
                        </Link>
                    </li>
                </ul>

                <ThemeButton />
            </nav>
        </header>
    )
}
