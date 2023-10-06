'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { styles } from './resource'

export const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={styles.themeButton}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? <SunIcon className={styles.sunIcon} /> : <MoonIcon className={styles.moonIcon} />}
        </button>
    )
}
