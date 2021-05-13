import axios from "axios"
import { LOGIN_ERROR_HANDLING, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER } from "./actionType"

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

const logout_user = () => {
    return{
        type : LOGOUT_USER
    }
}

const login_performer = (payload) => (dispatch) => {
    dispatch(login_request())
    return axios.post(`https://practo-server.herokuapp.com/user/authentication`, {
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

export {login_performer, login_error_handling, logout_user}