import { Divider } from '@material-ui/core'
import React from 'react'
import { AppointmentsCard } from '../../components/Appointments/AppointmentsCard'
import styles from "./Appointments.module.css"

const Appointments = () => {
    return (
        <div className={styles.background}>
        <div className={styles.appointmentCont}>
            <div className={styles.top}>
                <div className={styles.top_left}>
                    <h3>Your Drive</h3>
                </div>
                <div className={styles.top_right}>
                    <div className={styles.top_right_userDetails}>
                        <div className={styles.userDetails_left}>
                            <img src="https://via.placeholder.com/50" alt=""/>
                        </div>
                        <div className={styles.userDetails_right}>
                            <p><b>Mandar Satam</b></p>
                            <p>+8425028144</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.main_left}>
                    <Divider/>
                    <div className={styles.menu_item}>
                        <p>Medical records</p>
                    </div>
                    <Divider/>
                    <div className={styles.active}>
                        <p>Appointments</p>
                    </div>
                    <Divider/>
                    <div className={styles.menu_item}>
                        <p>Lab Tests</p>
                    </div>
                    <Divider/>
                    <div className={styles.menu_item}>
                        <p>Payment</p>
                    </div>
                    <Divider/>
                    <div className={styles.menu_item}>
                        <p>Medical records</p>
                    </div>
                    <Divider/>
                </div>
                <div className={styles.main_right}>
                    <AppointmentsCard/>
                    <AppointmentsCard/>
                    <AppointmentsCard/>
                </div>
            </div>
        </div>            
        </div>
    )
}

export {Appointments}
