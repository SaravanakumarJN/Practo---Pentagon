import React from 'react'
import styles from "./Bookingdetails.module.css"
import { useParams } from 'react-router'
import axios from 'axios'
import {getDocData} from "../utils";
import StripeCheckout from 'react-stripe-checkout'
import { stripePayment } from '../utilities/axios'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {bookSlot} from "../utils";
import { useHistory } from "react-router-dom";





// const doctor= {
//     name: "Dr. Vishnuvardhan Reddy Meedimale",
//     specialization: "Pediatrician",
//     experience: 26,
//     city: "Hyderabad",
//     clinic_name: "Apollo Cradle",
//     consulting_fee: 700,
//     likes: 73,
//     image_url: "https://imagesx.practo.com/providers/6ea7e0f7-b534-48c7-8c57-7349a0220e60.jpg?i_type=t_100x100",
//     id: 405,
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     loc: { "type": "Point", "coordinates": [ 17.3501617, 78.5510938 ] },
//     area: "LB Nagar"
// }
const Bookingdetails = () => {
    const {doctors_id, time} = useParams();
    const [docData, setDocData] = React.useState({});
    const [phone, setPhone] = React.useState("");

    const user = useSelector(state => state.authReducer.currentUser);
    console.log(user);

    const history = useHistory();

console.log(time)
    React.useEffect(() => {
        getDocData(doctors_id)
        .then((res) => {
            setDocData(res.data.data[0]);
        })
    }, [])
    const makePayment = (token) => {
        const body = {
            token,
            docData
        }
        stripePayment(body)
        .then(() => {
            const postObj = {
                doctor_id : doctors_id,
                name : user.name,
                contact : phone,
                time : time,
                userId : user._id
            }
            bookSlot(postObj);
            history.push("/");
        })
        
    }

    return (
        <div className = {styles.container}>
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
                                <p>At <span style={{fontSize:"16px",fontWeight:"700",color: "#414146"}}>{time.substring(11, 16)} {Number(time.substring(11, 13)) >= 12 ? 'PM' : 'AM'}</span></p>
                            </div>
                        </div>
                        <div className={styles.doctor}>
                            <div>
                            <img src={docData.image_url} style={{width:"130px"}}></img>
                            </div>
                            <div style={{marginLeft:"20px"}}>
                                <h3>{docData.name}</h3>
                                <p>{docData.specialization}</p>
                                <p>Experience of {docData.experience} years</p>
                            </div>
                        </div>
                        <div className={styles.hospital}>
                            <div>
                                <img src="https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg"
                                style={{width:"130px"}}></img>
                            </div>
                            <div style={{marginLeft:"20px"}}>
                                <h3>{docData.clinic_name}</h3>
                                <p>{docData.area},{docData.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.patienthead}>
                            <h3 style={{color:"#414146"}}>Patient Details</h3>
                            <h5>This in-clinic appointment is for: {user.name}</h5>
                            <h5>Please provide following information about {user.name}:</h5>
                        </div>
                        <div>
                            <p>FullName<span style={{color:"red"}}>*</span></p>
                            <input type="text" value={user.name} placeholder="Enter Your FullName" className={styles.name}></input>
                        </div>
                        <div>
                            <p>Mobile<span style={{color:"red"}}>*</span></p>
                            <input type="text" className={styles.name} value={phone}  onChange={(e) => setPhone(e.target.value)}   placeholder="Enter Mobile No."></input>
                        </div>
                        <div>
                            <p>Your Email</p>
                            <input type="text" value={user.email} className={styles.name} placeholder="Enter Your Email ID (Optional)"></input>
                        </div>
                        <div>
                            <StripeCheckout
                                stripeKey = "pk_test_51ITniwLuzrELcYjAY5A3nHnhpdreI7d7ZzOlCqfqQSZM0L6ay3T1LhRaNuDNZ96jMEAJ9ZRn5QsCyaD87yD4pFxi00g4zrdqCF"
                                token = {makePayment}
                                name = {`Book appoinment with ${docData.name}`}
                                amount = {docData.consulting_fee * 100}
                                currency = "INR"
                            >
                                <button className = {styles.confirm}>Book Appointment</button>
                            </StripeCheckout>
                        </div>
                        <div className={styles.conditions}>
                            <p>1. Updates will be sent to {user.email}</p>
                            <p>By booking this appointment, you agree to Practo’s<span style={{color:"#03a9f4"}}>Terms and Conditions.</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookingdetails
