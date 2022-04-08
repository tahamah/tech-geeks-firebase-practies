import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogo from '../../Assets/Image/google.svg'
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../Firebase/Firebase.init'

const provider = new GoogleAuthProvider()

const Signup = () => {
    const navigate = useNavigate()

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    const handleSingUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
    }

    return (
        <div className="auth-form-container ">
            <div className="auth-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSingUp}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <input type="email" name="email" id="email" />
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
                    <div className="input-field">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirm-password"
                            />
                        </div>
                    </div>
                    <button type="submit" className="auth-form-submit">
                        Sign Up
                    </button>
                </form>
                <p className="redirect">
                    Already have an account?{' '}
                    <span onClick={() => navigate('/login')}>Login</span>
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

export default Signup
