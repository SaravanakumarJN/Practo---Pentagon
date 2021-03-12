import axios from "axios"
import { LOGIN_ERROR_HANDLING, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const login_request = () => {
    return{
        type : LOGIN_REQUEST
    }
}

const login_success = (payload) => {
    return{
        type : LOGIN_SUCCESS,
        payload : payload
    }
}

const login_failure = () => {
    return{
        type : LOGIN_FAILURE,
    }
}

const login_error_handling = () => {
    return{
        type : LOGIN_ERROR_HANDLING
    }
}

const login_performer = (payload) => (dispatch) => {
    dispatch(login_request())
    return axios.post(`http://localhost:2233/user/authentication`, {
        ...payload
    })
    .then((res) => {
        dispatch(login_success(res.data.data))
    })
    .catch((err) => {
        dispatch(login_failure())
        console.log(err)
    })
}

export {login_performer, login_error_handling}