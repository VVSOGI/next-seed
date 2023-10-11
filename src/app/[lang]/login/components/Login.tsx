'use client'

import React, { useState } from 'react'
import { styles } from '../resource'
import { useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'

interface Props {
    locale: Locales
}

export default function Login({ locale }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        try {
            const data = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            console.log(data)
        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.imageSection}>
                <img className={styles.image} src="/images/icon-google.png" alt="" />
            </div>
            <div className={styles.loginSection}>
                <div className={styles.loginTitle}>로그인</div>
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
                <div className={styles.buttonsWrapper}>
                    <button className={styles.loginButton} onClick={() => handleLogin()}>
                        로그인
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${locale}/register`)}>
                        회원가입 하기
                    </button>
                </div>
                <div className={styles.oauthWrapper}>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-google.png" alt="" />
                    </div>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-facebook.png" alt="" />
                    </div>
                    <div className={styles.oauthButton}>
                        <img className={styles.oauthImage} src="/images/icon-github.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
