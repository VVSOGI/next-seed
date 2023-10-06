'use client'

import { oneMobileTitleOTF } from '@/fonts'
import React from 'react'
import { styles } from '../resource'

export default function Login() {
    return (
        <div className="dark:bg-neutral-700 flex h-[35rem] rounded-lg overflow-hidden shadow-primary">
            <div className="flex-4 flex items-center justify-center max-lg:hidden">
                <img className="h-1/2 w-1/2 object-cover" src="/images/icon-google.png" alt="" />
            </div>
            <div className="flex-1.5 flex flex-col justify-center p-4 px-16">
                <div className={`${oneMobileTitleOTF.className} text-base3 font-bold mb-4`}>로그인</div>
                <div className="mb-2">
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        className="dark:bg-gray-100 border-grey-200 block w-full rounded-md border px-4 py-3 text-gray-900 focus-visible:outline-none text-base0"
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        id="password"
                        placeholder="Enter your password"
                        className="dark:bg-gray-100 border-grey-200 block w-full rounded-md border px-4 py-3 text-gray-900 focus-visible:outline-none text-base0"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <button className="hover:bg-sky-600 active:bg-sky-700 px-4 py-3 bg-sky-500 text-white rounded-md border border-gray-200 text-base0">
                        로그인
                    </button>
                    <button className="hover:bg-gray-100 active:bg-gray-200 px-4 py-3 rounded-md border border-gray-200 text-base0">
                        회원가입 하기
                    </button>
                </div>
                <div className="flex justify-center gap-8 mt-8">
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
