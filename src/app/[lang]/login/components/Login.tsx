'use client'

import React, { useEffect, useState } from 'react'
import { styles } from '../resource'
import { usePathname, useRouter } from 'next/navigation'
import { Locales } from '@/types/locales'
import GoogleLoginButton from './GoogleLoginButton'
import axios from 'axios'

interface Props {
    locale: Locales
}

export default function Login({ locale }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get('token')
        if (token) {
            axios.post('/api/google', { token }).then((res) => {
                const { accessToken, refreshToken } = res.data
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
                window.close()
            })
        }
    }, [])

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
                    <button className={styles.loginButton} onClick={() => {}}>
                        로그인
                    </button>
                    <button className={styles.registerButton} onClick={() => router.push(`/${locale}/register`)}>
                        회원가입 하기
                    </button>
                </div>
                <div className={styles.oauthWrapper}>
                    <div className={styles.oauthButton}>
                        <GoogleLoginButton />
                        {/* <img className={styles.oauthImage} src="/images/icon-google.png" alt="" /> */}
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
