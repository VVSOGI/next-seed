'use client'

import React, { useEffect, useState } from 'react'
import { styles } from '../resource'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'

interface Props {
    locale: Locales
}

export default function Register({ locale }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const router = useRouter()

    const handleRegister = async () => {
        const data = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, checkPassword })
        })

        console.log(data)
    }

    useEffect(() => {
        fetch('/api/register', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
    }, [])

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.imageSection}>
                <img className={styles.image} src="/images/icon-github.png" alt="" />
            </div>
            <div className={styles.loginSection}>
                <div className={styles.loginTitle}>회원가입 하기</div>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Check your password again"
                        className={styles.input}
                        onChange={(e) => setCheckPassword(e.target.value)}
                    />
                </div>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.loginButton} onClick={handleRegister}>
                        회원가입 하기
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${locale}/login`)}>
                        로그인 페이지 이동
                    </button>
                </div>
            </div>
        </div>
    )
}
