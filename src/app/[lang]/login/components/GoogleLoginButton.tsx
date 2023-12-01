import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

const GoogleLoginButton = () => {
    const clientId = '859522995143-j3vqmechevn6ickstjhd6oqun4ji0nfa.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        axios.post('/api/google', { token: res.credential }).then((res) => {
                            console.log(res)
                        })
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
