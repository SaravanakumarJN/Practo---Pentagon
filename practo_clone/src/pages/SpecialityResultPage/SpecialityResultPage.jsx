import React from 'react'
import { useParams } from 'react-router'
import {DoctorCard} from '../../components/doctorCard/DoctorCard'
import { getDoctorBySpeciality } from '../../utilities/axios'

const SpecialityResultPage = () => {
    const {speciality, lat, long} = useParams()
    const [doctors, setDoctors] = React.useState([])

    React.useEffect(() => {
        const payload = {
            speciality,
            lat,
            long
        }
        getDoctorBySpeciality(payload)
        .then((data) => {
            setDoctors(data.data)
        })
    }, [])

    return (
        <div>
              {
                doctors.map((item) => {
                    return(
                        <DoctorCard key = {item.id} data = {item}/>
                    )
                })
            }
        </div>
    )
}

export {SpecialityResultPage}
