import React from 'react'
import { useHistory } from 'react-router'
import styles from './Navbar.module.css'

const Navbar = () => {
    const history = useHistory()

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
                User
            </div>
        </nav>
    )
}

export {Navbar}
