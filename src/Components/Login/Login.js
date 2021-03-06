import React, { useState } from 'react'
import './AuthForm.css'
import GoogleLogo from '../../Assets/Image/google.svg'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/Firebase.init'
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth'

const provider = new GoogleAuthProvider()

const Login = () => {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }
    const handleLogIn = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    return (
        <div className="auth-form-container ">
            <div className="auth-form">
                <h1>Login</h1>
                <form onSubmit={handleLogIn}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <input type="text" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                    </div>
                    <button type="submit" className="auth-form-submit">
                        Login
                    </button>
                </form>
                <p className="redirect">
                    New to Tech Geeks?{' '}
                    <span onClick={() => navigate('/signup')}>
                        Create New Account
                    </span>
                </p>
                <div className="horizontal-divider">
                    <div className="line-left" />
                    <p>or</p>
                    <div className="line-right" />
                </div>
                <div className="input-wrapper">
                    <button onClick={handleGoogleAuth} className="google-auth">
                        <img src={GoogleLogo} alt="" />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
