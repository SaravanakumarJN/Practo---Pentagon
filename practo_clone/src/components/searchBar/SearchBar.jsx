import React from 'react'
import styles from './SearchBar.module.css'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { get_doctors_performer } from '../../redux/doctorSearch/action'

const SearchBar = () => {
    const [mainQuery, setMainQuery] = React.useState("")
    const [locationQuery, setLoactionQuery] = React.useState("")
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    const {doctorsList, isLoading, isError} = useSelector(state => state.doctorsReducer, shallowEqual)

    React.useEffect(() => {
        let payload = {
            location : locationQuery,
            query : mainQuery
        }
        dispatch(get_doctors_performer(payload))
    }, [mainQuery])

    console.log(doctorsList)

    return (
        <div className = {styles.container}>
            <div className = {styles.location}>
                <input
                    type = "text"
                    value = {locationQuery}
                    onChange = {(e) => setLoactionQuery(e.target.value)}
                    placeholder = "Enter Location"
                />
            </div>
            <div className = {styles.main}>
                <input
                    type = "text"
                    value = {mainQuery}
                    onChange = {(e) => setMainQuery(e.target.value)}
                    placeholder = "Search doctors, clinics, hospitals, etc.,"
                />
                {/* <div className = {styles.dropdown}>
                </div> */}
            </div>
        </div>
    )
}

export {SearchBar}
