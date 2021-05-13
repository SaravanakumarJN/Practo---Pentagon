import React from 'react'
import styles from './SearchBar.module.css'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { get_doctors_performer } from '../../redux/doctorSearch/action'
import {BiCurrentLocation, BiSearch} from 'react-icons/bi'
import {GrAddCircle} from 'react-icons/gr'
import { geo_reverse_encoding, geo_encoding } from '../../utilities/axios'
import { SearchResultCard } from '../searchResultCard/SearchResultCard'
import {useHistory} from 'react-router-dom'

const SearchBar = () => {
    const [mainQuery, setMainQuery] = React.useState("")
    const [locationQuery, setLoactionQuery] = React.useState("")
    const [coordinates, setCoordinates] = React.useState({})
    const dispatch = useDispatch()
    const {doctorsList, isLoading} = useSelector(state => state.doctorsReducer, shallowEqual)
    const history = useHistory()

    //set coordinates
    const getCoordinates = (coordinates) => {
        const {latitude, longitude} = coordinates.coords
        const lat_long = {
            lat : latitude,
            long : longitude
        }
        setCoordinates(lat_long)
    }

    //get coordinates
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    //get location from coordinates
    React.useEffect(() => {
        if(coordinates.lat !== undefined && coordinates.long !== undefined){
            geo_reverse_encoding(coordinates)
            .then((data) => {
                // const city = data.results[0].city !== "" ? data.results[0].city : data.results[0].district
                // const locality = data.results[0].locality !== "" ? data.results[0].locality : data.results[0].village
                // const area =  locality + ", " + city
                setLoactionQuery(data.results[0].formatted_address)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [coordinates])

    //get coordinates on mount
    React.useEffect(() => {
        handleGetLocation()
    }, [])

    //dynamic search request 
    React.useEffect(() => {
        if(coordinates.lat !== undefined && coordinates.long !== undefined){
            let payload = {
                coordinates : coordinates,
                query : mainQuery
            }
            dispatch(get_doctors_performer(payload))
        }
    }, [mainQuery])

    //get coordinates from location
    // const handleGetCoordinates = () => {
    //     if(locationQuery !== ""){
    //         geo_encoding(locationQuery)
    //         .then((data)=> {
    //             console.log(data)
    //         })
    //     }
    //     else{
    //         alert("Add Location")
    //     }
    // }

    //on click of speciality
    const handleSpeciality = (speciality) => {
        const {lat, long} = coordinates
        if(coordinates.lat !== undefined && coordinates.long !== undefined){
            history.push(`doctors/${speciality}/speciality/${lat}/lat/${long}/long`)
        }
        else{
            alert("Select location or Add location")
        }
    }

    //on click of doctor
    const handleDoctorsPage = (id) => {
        history.push(`doctors/${id}/id`)
    }

    const speciality = ["Dermatologist", "Pediatrician", "Dentist", "General physician", "ENT", "Gynecologist"]
    return (
        <div>
            <div className = {styles.container}>
                <div className = {styles.location}>
                    <span 
                        className = {styles.location_icon}
                        onClick = {handleGetLocation}
                    >
                        <BiCurrentLocation size = "1.2em"/>
                    </span>
                    <input
                        type = "text"
                        value = {locationQuery}
                        onChange = {(e) => setLoactionQuery(e.target.value)}
                        placeholder = "Enter Location"
                    />
                    <span
                        className = {styles.location_add_icon}
                        // onClick = {handleGetCoordinates}
                    >
                        <GrAddCircle/>
                    </span>
                </div>
                <div className = {styles.main}>
                    <span className = {styles.search_icon}>
                        <BiSearch size = "1.2em"/>
                    </span>
                    <input
                        type = "text"
                        value = {mainQuery}
                        onChange = {(e) => setMainQuery(e.target.value)}
                        placeholder = "Search doctors, clinics, etc.,"
                    />
                    <div className = {styles.dropdown}>
                        {
                            isLoading 
                            ? <div style = {{padding : "15px 0"}}>Loading results...</div> 
                            : doctorsList?.map((item) => {
                                return(
                                    <SearchResultCard data = {item} onClick = {handleDoctorsPage}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className = {styles.speciality}>
                <strong>Speciality:</strong>
                {
                    speciality?.map((speciality, i) => {
                        return(
                            <span 
                                key = {i}
                                onClick = {() => {handleSpeciality(speciality)}}
                            >
                                {speciality} 
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {SearchBar}

