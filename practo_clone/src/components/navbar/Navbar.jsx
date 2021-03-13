import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logout_user } from '../../redux/auth/action'
import styles from './Navbar.module.css'

const Navbar = () => {
    const history = useHistory()
    const {isLoggedIn, currentUser} = useSelector(state => state.authReducer, shallowEqual)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem("currentUser")
        localStorage.removeItem("isLoggedIn")
        dispatch(logout_user())
    }

    const handleDrive = () => {
        history.push("/appointments")
    }

    return (
        <nav className = {styles.nav}>
            <div 
                className = {styles.logo}
                onClick = {() => history.push("/")}
            >
                <img
                    src = "https://www.practo.com/nav/9.5.5/consumer/images/practo.svg"
                    alt = "logo"
                />
            </div>
            <div 
                className = {styles.left} 
                onClick = {() => history.push("/doctors")}>
                <strong>
                    Doctors
                </strong>
                <br/>
                <span>Book an appointment</span>
            </div>
            <div className = {styles.left}>
                <strong>
                    Consult
                </strong>
                <br/>
                <span>Consult with top doctors</span>
            </div>
            <div className = {styles.left}>
                <strong>
                    Pharmacy
                </strong>
                <br/>
                <span>Medicine & health products</span>
            </div>
            <div className = {styles.left}>
                <strong>
                    Diagonistics
                </strong>
                <br/>
                <span>Book test & checkups</span>
            </div>
            <div className = {styles.flex_grow}></div>
            <div className = {styles.right}>
                For Providers
            </div>
            <div className = {styles.right}>
                Security & help
            </div>
            <div className = {styles.right}>
                {
                    isLoggedIn
                    ? <div className = {styles.profile}>
                        {currentUser.name} &#9662;
                        <div
                            className = {styles.profile_dropdown}
                        >
                            <div onClick = {handleDrive}>Your Drive</div>
                            <div onClick = {handleLogout}>Logout</div>
                        </div>
                    </div>
                    : <button
                        className = {styles.login_btn}
                        onClick = {() => history.push("/login")}
                    >
                        Login / Signup
                    </button>
                }
            </div>
        </nav>
    )
}

export {Navbar}
