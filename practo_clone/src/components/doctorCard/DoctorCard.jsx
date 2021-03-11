import React from 'react'
import styles from './DoctorCard.module.css'

const DoctorCard = ({data}) => {

    return (
        <div className = {styles.card}>
            <div className = {styles.left}>
                <img 
                    className = {styles.avatar}
                    src = {data.image_url}
                    alt = "avatar"
                />
                <div className = {styles.badge}></div>
            </div>
            <div className = {styles.mid}> 
                <h1>{data.name}</h1>
                <p className = {styles.grey}>{data.specialization}</p>
                <p className = {styles.grey}>{data.experience} years</p>
                <p><strong>{data.area}, {data.city}</strong> ♦️ {data.clinic_name}</p>
                <p>Rs.{data.consulting_fee} Consultation fee at clinic</p>
                <div className = {styles.line_break}></div>
                <div className = {styles.ratings}>
                    👍 {data.likes}%
                </div>
            </div>
            <div className = {styles.right}> 
                <button className = {styles.book_btn}>Book Appointment<br/><span> No Booking Fee</span></button>
            </div>
        </div>
    )
}

export {DoctorCard}
