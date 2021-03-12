import React from 'react'
import styles from "./Appointments.module.css"

const Appointments = () => {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.top_left}>
                    <h2>Your Drive</h2>
                </div>
                <div className={styles.top_right}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
            </div>
            <div className={styles.main}>

            </div>
        </div>
    )
}

export {Appointments}
