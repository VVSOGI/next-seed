import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        // colors: {
        //     primary: 'rgb(var(--color-primary) / <alpha-value>)',
        //     text: 'rgb(var(--color-text) / <alpha-value>)',
        //     success: 'rgb(var(--color-success) / <alpha-value>)',
        //     info: 'rgb(var(--color-info) / <alpha-value>)',
        //     warn: 'rgb(var(--color-warn) / <alpha-value>)',
        //     error: 'rgb(var(--color-error) / <alpha-value>)',
        //     transparent: 'transparent',
        //     current: 'currentColor'
        // },
        container: {
            center: true,
            padding: {
                md: '1.5rem',
                xl: '2rem'
            }
        },
        fontSize: {
            base0: '0.75rem',
            base1: '1rem',
            base2: '1.125rem',
            base3: '1.25rem',
            base4: '1.375rem',
            base5: '1.5rem'
        },
        extend: {
            flex: {
                1: '1 1 0%',
                1.5: '1.5 1.5 0%',
                2: '2 2 0%',
                2.5: '2.5 2.5 0%',
                3: '3 3 0%',
                4: '4 4 0%'
            },
            boxShadow: {
                primary: '0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1)',
                icon: '0 0 0.25rem 0 rgba(0, 0, 0, 0.2)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: []
}
export default config
