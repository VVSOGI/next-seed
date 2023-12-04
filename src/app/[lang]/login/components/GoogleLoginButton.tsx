import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

const GoogleLoginButton = () => {
    const clientId = '859522995143-j3vqmechevn6ickstjhd6oqun4ji0nfa.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={async (res) => {
                        const { data } = await axios.post('/api/google', { token: res.credential })
                        const { accessToken, refreshToken } = data
                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('refreshToken', refreshToken)
                        window.open(`/ko/login?token=${res.credential}`)
                    }}
                    onError={() => {
                        console.log()
                    }}
                />
            </GoogleOAuthProvider>
        </>
    )
}

export default GoogleLoginButton
