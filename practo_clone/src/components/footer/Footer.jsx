import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const Practo = ["About", "Blog", "Careers", "Press", "Contact Us"]

    const ForPatients = ["Ask free health queries", "Search for doctors", "Search for clinics", "Search for hospitals", 
    "Book Diagonistic Tests", "Book Full Body Checkups", "Read health articles", "Consult a doctor", "Order medicines", 
    "Read about medicines", "Practo drive", "Health app", "Practo Plus"]

    const ForDoctors = [ "Practo Consult", "Practo Health Feed", "Practo Profile" ]
    const ForClinics = ["Practo Prime", "Ray by Practo", "Practo Reach","Ray Tab", "Practo Pro"]

    const ForHospitals = [ "Insta by Practo", "Qikwell by Practo", "Querent by Practo", "Practo Profile", "Practo Reach", "Practo Drive" ]

    const More = ["Help", "Developers", "Privacy Policy", "Terms & Conditions", "Healthcare Directory", "Practo Health Wiki"]

    const Social = ["Facebook", "Twitter", "LinkedIn", "Youtube", "Github"]

    return (
        <div className = {styles.container}>
            <div className = {styles.top}>
                <div className = {styles.column}>
                    <h3>Practo</h3>
                    {
                        Practo.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className = {styles.column}>
                    <h3>For Patients</h3>
                    {
                        ForPatients.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className = {styles.column}>
                    <h3>For Doctors</h3>
                    {
                        ForDoctors.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                    <h3>For Clinics</h3>
                    {
                        ForClinics.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className = {styles.column}>
                    <h3>For Hospitals</h3>
                    {
                        ForHospitals.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className = {styles.column}>
                    <h3>More</h3>
                    {
                        More.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className = {styles.column}>
                    <h3>Social</h3>
                    {
                        Social.map((item, i) => {
                            return(
                                <div key = {i}>{item}</div>
                            )
                        })
                    }
                </div>   
            </div>
            <div className = {styles.bottom}>
                <img 
                    src = "https://www.practostatic.com/web-assets/images/white_practo_logo.svg"
                    alt = "logo"
                />
                <div>
                    Copyrights &#169; 2021, Practo. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export {Footer}
