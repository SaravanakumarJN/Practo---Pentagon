import axios from "axios";

function geo_reverse_encoding(payload){
    return axios.get(`http://apis.mapmyindia.com/advancedmaps/v1/okkegv9vibpsaq845p5lali4g33uw7zw/rev_geocode?lat=${payload.lat}&lng=${payload.long}`)
    .then(res => res.data)
}

function geo_encoding(payload){
    return axios.get(`https://atlas.mapmyindia.com/api/places/geocode?address=${payload}`)
    .then(res => res.data)
}

function getDoctorByID(payload){
    return axios.get(`http://localhost:2233/doctors/${payload}/id`)
    .then(res => res.data)
}

function getDoctorBySpeciality(payload){
    const {speciality, lat, long} = payload
    console.log(payload)
    return axios.get(`http://localhost:2233/doctors/${speciality}/speciality`, {
        params : {
            lat : lat.trim(),
            long : long.trim()
        }
    })
    .then(res => res.data)
}

export {geo_encoding, geo_reverse_encoding, getDoctorByID, getDoctorBySpeciality}


//key  =>   okkegv9vibpsaq845p5lali4g33uw7zw