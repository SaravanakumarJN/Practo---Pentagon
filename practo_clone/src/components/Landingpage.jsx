import React from 'react'
import styles from "./Landingpage.module.css"
const Landingpage = () => {
    return (
        <div>
            <div>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/banner.png"
                style={{height:"320px", width:"100%"}}></img>
            </div>
            <div className={styles.neardoctor}>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/find-doctors-2.png"
               style={{height:"225px"}} ></img>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/doctor-online.png"
               style={{height:"225px"}}  ></img>
            </div>
            <div className={styles.covid}>
                <div className={styles.covidhead}>
                    <h2 style={{color:"white"}}>How Practo is Helping India Fight COVID-19</h2>
                </div>
                <div className={styles.coviddoctor}>
                    <img src="https://www.practostatic.com/subscriptions/upsell/PH/covid_19_home_page_159003888598.png"
                    style={{width:"360px"}}></img>

                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/swasth-card-2.png"
                    style={{width:"360px"}}></img>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/coronavirus.png"
                    style={{width:"360px"}}></img>
                </div>
            </div>
            <div className={styles.specialities}>
                <div>
                    <h2>Consult top doctors online for any health concern</h2>
                    <p>Private online consultations with verified doctors in all specialists</p>
                </div>
                <div className={styles.specialbtn}>
                    View All Specialities
                </div>
            </div>
        </div>
    )
}

export default Landingpage
