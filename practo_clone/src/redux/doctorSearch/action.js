import { GET_DOCTORS_FAILURE, GET_DOCTORS_REQUEST, GET_DOCTORS_SUCCESS } from "./actionType"
import axios from 'axios'

const get_doctors_request = (payload) => {
    return{
        type : GET_DOCTORS_REQUEST,
    }
}

const get_doctors_success = (payload) => {
    return{
        type : GET_DOCTORS_SUCCESS,
        payload : payload
    }
}

const get_doctors_failure = () => {
    return{
        type : GET_DOCTORS_FAILURE,
    }
}

const get_doctors_error_handle = () => {
    return{
        type : GET_DOCTORS_SUCCESS
    }
}

const url = "http://localhost:8001/doctors"
const get_doctors_performer = (payload) => (dispatch) =>{
    const {location, query} = payload
    dispatch(get_doctors_request())
    return axios.get(url, {
        params : {
            city : location,
            q : query
        }
    })
    .then(res => {
        dispatch(get_doctors_success(res.data))
        // console.log(res.data)
    })
    .catch(() => {
        dispatch(get_doctors_failure())
    })
}

export {get_doctors_performer, get_doctors_error_handle}