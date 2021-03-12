import React from 'react'
import styles from "./AppointmentsCard.module.css"
import Button from '@material-ui/core/Button';


const AppointmentsCard = () => {
  return (
    <div className={styles.detailCont}>
      <div className={styles.date}>
          <h3>10</h3>
          <h5 className={styles.specialP}>MAR</h5>
      </div>
      <div className={styles.userDetails}>
        <p><b>Dr. Sunny Soni</b></p>
        <p className={styles.specialP}>Wednesday, 12:55 PM</p>
        <p className={styles.specialP}>Aesthetic, Dental Clinic</p>
        <p>Active</p>
      </div>
      <div className={styles.action}> 
        <Button variant="outlined" color="primary" style={{marginRight: "1em"}}>
          View Details
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </div>
    </div>
  )
}

export {AppointmentsCard}
