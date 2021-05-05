import React from 'react'
import styles from "./Bookingdetails.module.css"
import { useParams } from 'react-router'
import {getDocData} from "../utils";
import StripeCheckout from 'react-stripe-checkout'
import { stripePayment } from '../utilities/axios'
import {useSelector} from 'react-redux';
import {bookSlot} from "../utils";
import { useHistory } from "react-router-dom";
import moment from 'moment';

const Bookingdetails = () => {
    const {doctors_id, time} = useParams();
    const [docData, setDocData] = React.useState({});
    const [phone, setPhone] = React.useState("");

    const user = useSelector(state => state.authReducer.currentUser);

    const history = useHistory();

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
                status : true,
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
                                <p>On <span style={{fontSize:"16px",fontWeight:"700",color: "#414146"}}>{moment(time).format("MMMM Do")}</span></p>
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
                            <img src={docData.image_url} style={{width:"130px"}} alt = "avatar"></img>
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
                                style={{width:"130px"}} alt = "hospital img"></img>
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
                                stripeKey = 'pk_test_51ITniwLuzrELcYjA7SOWjOj1CCW8Eg0TGImSIaBoGFns4gAxpx05ePioupp1h0OCUv255AOSeMQoSgPkB9zSnmSJ00Lx00vmxP'
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
