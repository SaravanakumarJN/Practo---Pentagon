import React from 'react'
import styles from './DoctorCard.module.css'

const doctor =    {
    name: 'Dr. Deepthi Motiram',
    specialization: 'Dermatologist',
    experience: 13,
    city: 'Chennai',
    clinic_name: '+ 3 more',
    consulting_fee: 600,
    likes: 92,
    image_url: 'https://imagesx.practo.com/providers/8646572b-09db-45d7-9bdd-c08c5ece27e3.jpg?i_type=t_100x100',
    id: 74,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    area: 'Ambattur',
    lat: 13.1128863,
    long: 80.1598624
  }

const DoctorCard = ({data = doctor}) => {

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
