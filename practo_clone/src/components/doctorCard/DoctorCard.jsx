import React from 'react'
import { BookingCard } from '../bookingCard/BookingCard';
import styles from './DoctorCard.module.css'

const DoctorCard = ({data}) => {
    const [open, setOpen] = React.useState(false);

    const handleBookingCard = () => {
        setOpen(!open);
    }

    return (
        <>
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
                    <button onClick={handleBookingCard} className = {styles.book_btn}>Book Appointment</button>
                </div>
            </div>
            <div>
            {
                open && <BookingCard doctors_id ={data._id}/>
            }
            </div>
        </>
    )
}

export {DoctorCard}
