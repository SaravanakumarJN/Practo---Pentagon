import React from 'react'
import styles from "./Bookingdetails.module.css"
import StripeCheckout from 'react-stripe-checkout'
import { stripePayment } from '../utilities/axios'

const doctor= {
    name: "Dr. Vishnuvardhan Reddy Meedimale",
    specialization: "Pediatrician",
    experience: 26,
    city: "Hyderabad",
    clinic_name: "Apollo Cradle",
    consulting_fee: 700,
    likes: 73,
    image_url: "https://imagesx.practo.com/providers/6ea7e0f7-b534-48c7-8c57-7349a0220e60.jpg?i_type=t_100x100",
    id: 405,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    loc: { "type": "Point", "coordinates": [ 17.3501617, 78.5510938 ] },
    area: "LB Nagar"
}
const Bookingdetails = () => {
    const makePayment = (token) => {
        const body = {
            token,
            doctor
        }
        stripePayment(body)
        .then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src="https://nav.practo.com/9.5.5/consumer/images/practo.svg" style={{height:"25px"}} alt="practo logo"></img>
                </div>
                <div className={styles.user}>
                    Bharath Reddy  v
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.form}>
                    <div className={styles.left}>
                        <div className={styles.appoint}>
                            <i class="fa fa-home " aria-hidden="true" style={{marginRight:"10px"}}></i>
                            <h3>In Clinic Appointment</h3>
                        </div>
                        <div className={styles.timings}>
                            <div>
                                <div className={styles.date}>
                                <i class="fa fa-calendar-o" aria-hidden="true" style={{marginRight:"10px"}}></i>
                                <p>On <span style={{fontSize:"16px",fontWeight:"700",color: "#414146"}}>March 11</span></p>
                                </div>
                                <h5 style={{marginTop:"-10px",color:"#14bef0"}}>Change Date & Time</h5>
                            </div>
                            <div className={styles.time}>
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                <p>At <span style={{fontSize:"16px",fontWeight:"700",color: "#414146"}}>6:00PM</span></p>
                            </div>
                        </div>
                        <div className={styles.doctor}>
                            <div>
                            <img src={doctor.image_url} style={{width:"130px"}}></img>
                            </div>
                            <div style={{marginLeft:"20px"}}>
                                <h3>{doctor.name}</h3>
                                <p>{doctor.specialization}</p>
                                <p>Experience of {doctor.experience} years</p>
                            </div>
                        </div>
                        <div className={styles.hospital}>
                            <div>
                                <img src="https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg"
                                style={{width:"130px"}}></img>
                            </div>
                            <div style={{marginLeft:"20px"}}>
                                <h3>{doctor.clinic_name}</h3>
                                <p>{doctor.area},{doctor.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.patienthead}>
                            <h3 style={{color:"#414146"}}>Patient Details</h3>
                            <h5>This in-clinic appointment is for:</h5>
                            <h5>Please provide following information about Bharath Reddy:</h5>
                        </div>
                        <div>
                            <p>FullName<span style={{color:"red"}}>*</span></p>
                            <input type="text" value={"Bharath Reddy"} placeholder="Enter Your FullName" className={styles.name}></input>
                        </div>
                        <div>
                            <p>Mobile<span style={{color:"red"}}>*</span></p>
                            <input type="text" value={"9876543210"} className={styles.name} disabled></input>
                        </div>
                        <div>
                            <p>Your Email<span style={{color:"red"}}>*</span></p>
                            <input type="text" value={""} className={styles.name} placeholder="Enter Your Email ID (Optional)"></input>
                        </div>
                        <div>
                            <StripeCheckout
                                stripeKey = "pk_test_51ITniwLuzrELcYjAY5A3nHnhpdreI7d7ZzOlCqfqQSZM0L6ay3T1LhRaNuDNZ96jMEAJ9ZRn5QsCyaD87yD4pFxi00g4zrdqCF"
                                token = {makePayment}
                                name = {`Book appoinment with ${doctor.name}`}
                                amount = {doctor.consulting_fee * 100}
                                currency = "INR"
                            >
                                <button className = {styles.confirm}>Book Appointment</button>
                            </StripeCheckout>
                        </div>
                        <div className={styles.conditions}>
                            <p>1. Updates will be sent to +916303583383</p>
                            <p>By booking this appointment, you agree to Practo’s<span style={{color:"#03a9f4"}}>Terms and Conditions.</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookingdetails
