import React from 'react'
import styles from './SpecialityResultPage.module.css'
import { useParams } from 'react-router'
import {DoctorCard} from '../../components/doctorCard/DoctorCard'
import { getDoctorBySpeciality, getDoctorsWithFilter } from '../../utilities/axios'

const SpecialityResultPage = () => {
    const {speciality, lat, long} = useParams()
    const [doctors, setDoctors] = React.useState([])
    const [sort, setSort] = React.useState("Relevance")
    const [filter, setFilter] = React.useState("")

    const getDoctors = () => {
        const payload = {
            speciality,
            lat,
            long
        }
        getDoctorBySpeciality(payload)
        .then((data) => {
            setDoctors(data.data)
        })
        .catch(err => console.log(err))
    }

    const getDoctorsFilter = (payload) => {
        getDoctorsWithFilter(payload)
        .then((data) => {
            setDoctors(data.data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getDoctors()
    }, [])

    React.useEffect(() => {
        if(sort === "Relevance"){
            getDoctors()
        }
    }, [sort])

    React.useEffect(() => {
        if(filter === "No filters"){
            getDoctors()
        }
        else if(filter === "0 - 200"){
            const payload = {
                speciality,
                lat,
                long,
                from : 0,
                to : 200
            }
            getDoctorsWithFilter(payload)
        }
        else if(filter === "200 - 500"){
            const payload = {
                speciality,
                lat,
                long,
                from : 200,
                to : 500
            }
            getDoctorsFilter(payload)
        }
        else if(filter === "500 +"){
            const payload = {
                speciality,
                lat,
                long,
                from : 500,
                to : 100000
            }
            getDoctorsFilter(payload)
        }
    }, [filter])

    return (
        <div>
            <div className = {styles.feature_nav}>
                <div className = {styles.sort}>
                    <span className = {styles.sort_label}>Sort By</span>
                    <select 
                        name = "sort" 
                        id = "sort" 
                        className = {styles.select}
                        value = {sort}
                        onChange = {e => setSort(e.target.value)}
                    >
                        {
                            ["Relevance","Price - Low to High", "Price - High to Low", "Years of Experience", "Recommendation"].map((item, i) => {
                                return(
                                    <option key = {i} value = {item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <div className = {styles.filter}>
                        <span className = {styles.filter_label}>Filter by fee</span>
                        <select 
                            name = "filter" 
                            id = "filter" 
                            className = {styles.select}
                            value = {filter}
                            onChange = {e => setFilter(e.target.value)}
                        >
                            {
                                ["No filters", "0 - 200","200 - 500", "500 +"].map((item, i) => {
                                    return(
                                        <option key = {i} value = {item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div>
                {
                    doctors
                    ?.sort((a,b) => {
                        if(sort === "Price - Low to High" || sort === "Price - High to Low"){
                            let val = sort === "Price - Low to High" ? -1 : 1
                            if(a.consulting_fee < b.consulting_fee){
                                return val
                            } 
                            else{
                                return -val
                            }
                        }
                        else if(sort === "Years of Experience"){
                            return b.experience - a.experience
                        }
                        else if(sort === "Recommendation"){
                            return b.likes - a.likes
                        }
                    })
                    .map((item) => {
                        return(
                            <DoctorCard key = {item.id} data = {item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {SpecialityResultPage}
