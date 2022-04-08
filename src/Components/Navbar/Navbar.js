import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/Image/logo.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom'
import { auth } from '../../Firebase/Firebase.init'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Navbar = () => {
    const [user, setUser] = useState({})
    const { pathname } = useLocation()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [])

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
    }

    return (
        <nav
            style={
                pathname.includes('blog')
                    ? { display: 'none' }
                    : { display: 'flex' }
            }
        >
            <div className="logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="link-container">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'active-link' : 'link'
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'active-link' : 'link'
                    }
                    to="/videos"
                >
                    Videos
                </NavLink>
                {user?.email ? (
                    <button onClick={handleLogOut} className="logout-button">
                        Log Out
                    </button>
                ) : (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : 'link'
                        }
                        to="/login"
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    )
}

export default Navbar
