import Link from 'next/link'
import { ThemeButton } from '.'
import { styles } from './resource'

interface Props {
    locale: 'en' | 'ko'
}

export const Header = ({ locale }: Props) => {
    return (
        <header className={styles.headerWrapper}>
            <nav className={styles.navbar}>
                <ul className={styles.listWrapper}>
                    <li className={styles.list}>
                        <Link className={styles.listItem} href={`/${locale}/home`}>
                            Home
                        </Link>
                        <Link className={styles.listItem} href="/test">
                            Test
                        </Link>
                        <Link className={styles.listItem} href="/">
                            Other
                        </Link>
                    </li>
                </ul>

                <ThemeButton />
            </nav>
        </header>
    )
}
