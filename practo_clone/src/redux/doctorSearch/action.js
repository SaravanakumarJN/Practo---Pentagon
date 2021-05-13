import { GET_DOCTORS_FAILURE, GET_DOCTORS_REQUEST, GET_DOCTORS_SUCCESS } from "./actionType"
import axios from 'axios'

const get_doctors_request = () => {
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

let cancel = ""
const get_doctors_performer = (payload) => (dispatch) =>{
    const {coordinates, query} = payload
    dispatch(get_doctors_request())

    if(cancel){
        cancel.cancel()
    }
    cancel = axios.CancelToken.source()

    return axios.get(`https://practo-server.herokuapp.com/doctors/${query}/query`, {
        cancelToken : cancel.token,
        params : {
            lat : coordinates.lat,
            long : coordinates.long
        }
    })
    .then(res => {
        dispatch(get_doctors_success(res.data.data))
        // console.log(res.data)
    })
    .catch(() => {
        dispatch(get_doctors_failure())
    })
}

export {get_doctors_performer, get_doctors_error_handle}