import React from 'react'
import styles from "./Landingpage.module.css"
const Landingpage = () => {
    return (
        <div>
            <div className={styles.topimage}>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/banner.png"
                style={{height:"320px"}} alt="fdgf"></img>
            </div>
            <div className={styles.neardoctor}>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/find-doctors-2.png"
               style={{height:"225px"}} alt="dfdf" ></img>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/doctor-online.png"
               style={{height:"225px"}} alt="gfdhgf"  ></img>
            </div>
            <div className={styles.covid}>
                <div className={styles.covidhead}>
                    <h2 style={{color:"white"}}>How Practo is Helping India Fight COVID-19</h2>
                </div>
                <div className={styles.coviddoctor}>
                    <img src="https://www.practostatic.com/subscriptions/upsell/PH/covid_19_home_page_159003888598.png"
                    style={{width:"360px"}} alt="ghi"></img>

                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/swasth-card-2.png"
                    style={{width:"360px"}} alt="def"></img>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/coronavirus.png"
                    style={{width:"360px"}} alt="abc"></img>
                </div>
            </div>
            <div className={styles.specialities}>
                <div style={{color:"#414146"}}>
                    <h2 style={{margin:"0"}}>Consult top doctors online for any health concern</h2>
                    <p>Private online consultations with verified doctors in all specialists</p>
                </div>
                <div className={styles.specialbtn}>
                    View All Specialities
                </div>
            </div>
            <div className={styles.consultations}>
                <div className={styles.consult}>
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
                    style={{width:"150px"}}></img>
                    <h5>Period doubts</h5>
                    <h5>CONSULT NOW</h5>
                </div>
                <div className={styles.consult}>
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" style={{width:"150px"}}></img>
                    <h5>Acne,pimple or Skin issues</h5>
                    <h5>CONSULT NOW</h5>
                </div>
                <div className={styles.consult}>
                    <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" style={{width:"150px"}}></img>
                    <h5>Performance issues in bed</h5>
                    <h5>CONSULT NOW</h5>
                </div>
                <div className={styles.consult}>
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" style={{width:"150px"}}></img>
                    <h5>Cold,Cough or Fever</h5>
                    <h5>CONSULT NOW</h5>
                </div>
                <div className={styles.consult}>
                    <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" style={{width:"150px"}}></img>
                    <h5>Child not feeling well</h5>
                    <h5>CONSULT NOW</h5>
                </div>
                <div className={styles.consult}>
                    <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" style={{width:"150px"}}></img>
                    <h5>Depression or anxiety</h5>
                    <h5>CONSULT NOW</h5>
                </div>
            </div>
            <div style={{padding:"0px 50px"}}>
                <div className={styles.consultheading}>
                    <h2>Book an appointment for an in-clinic consultation</h2>
                    <p>Find experienced doctors across all specialties</p>
                </div>
                <div className={styles.consultdiff}>
                    <div className={styles.consultspecial}>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"></img>
                        <h3>Dentist</h3>
                        <p>Teething troubles? Schedule a dental checkup</p>
                    </div>
                    <div className={styles.consultspecial}>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"></img>
                        <h3>Gynecologist/Obstetrician</h3>
                        <p>Explore for women's health,pregnancy and infertility treatments</p>
                    </div>
                    <div className={styles.consultspecial}>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg"></img>
                        <h3>Dietitian/Nutrition</h3>
                        <p>Get guidance on eating right,weight management and sports nutrition</p>
                    </div>
                    <div className={styles.consultspecial}>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"></img>
                        <h3>Physiotherapist</h3>
                        <p>Pulled a muscle? Get it treated by a trained physiotherapist</p>
                    </div>
                </div>
            </div>
            <div className={styles.articleContainer}>
                <div className={styles.readarticle}>
                    <h1>Read top articles from health experts</h1>
                    <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                    <button>See all articles</button>
                </div>
                <div className={styles.article}>
                    <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"></img>
                    <h5 style={{color:"#079ac7"}}>CORONAVIRUS</h5>
                    <h5>12 Coronavirus Myths and Facts That You Should Be Aware Of</h5>
                    <p>Dr . Diana Borgio</p>
                </div>
                <div className={styles.article}>
                    <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"></img>
                    <h5 style={{color:"#079ac7"}}>VITAMINS AND SUPPLEMENTS</h5>
                    <h5>Eating Right to Build Immunity Againist Cold And Viral Infections</h5>
                    <p>Dr . Diana Borgio</p>
                </div>
            </div>
            <div className={styles.signup}>
                <div style={{margin:"50px"}}>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
                    style={{width:"330px"}}></img>
                </div>
                <div className={styles.download}>
                    <h1>Download the Practo app</h1>
                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                    <div>
                        <h4>Get the link to download the app</h4>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputBox}>
                                <div className={styles.code}>+91</div>
                                <input type="text" placeholder="Enter Phone Number"></input>
                            </div>
                            <div className={styles.smsbtn}>
                                Send SMS
                            </div>
                        </div>
                    </div>
                    <div className={styles.google}>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"></img>
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
