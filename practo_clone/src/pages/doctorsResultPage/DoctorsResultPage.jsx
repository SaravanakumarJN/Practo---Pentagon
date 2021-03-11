import React from 'react'
import styles from './DoctorsResultPage.module.css'
import {DoctorCard} from '../../components/doctorCard/DoctorCard'
import { useParams } from 'react-router'
import { getDoctorByID } from '../../utilities/axios'

const DoctorResultPage = () => {
    const {id} = useParams()
    const [doctor, setDoctor] = React.useState([])

    React.useState(() => {
      getDoctorByID(id)
      .then((data) => {
        setDoctor(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }, [])

    return (
        <div className = {styles.container}> 
            {
                doctor.map((item) => {
                    return(
                        <DoctorCard key = {item.id} data = {item}/>
                    )
                })
            }
        </div>
    )
}

export {DoctorResultPage}
