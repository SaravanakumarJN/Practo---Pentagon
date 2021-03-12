import { Divider } from '@material-ui/core'
import React from 'react'
import { AppointmentsCard } from '../../components/Appointments/AppointmentsCard'
import styles from "./Appointments.module.css"
import {useSelector} from 'react-redux';
import {getUserAppointments} from "../../utils"


const Appointments = () => {
    const user = useSelector(state => state.authReducer.currentUser);
    
    const [appointments ,setAppointments] = React.useState([]);

    React.useEffect(() => {
        getUserAppointments(user._id)
        .then(res => {
            console.log(res.data);
        })
    }, [])

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
                            <img src={user.image_url} alt=""/>
                        </div>
                        <div className={styles.userDetails_right}>
                            <p><b>{user.name}</b></p>
                            <p>{user.email}</p>
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
