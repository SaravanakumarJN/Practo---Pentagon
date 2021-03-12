import { LOGIN_ERROR_HANDLING, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

const initState = {
    currentUser : currentUser === null ? {} : currentUser,
    isLoading : false,
    isError : false,
    isLoggedIn : isLoggedIn === null ? false : isLoggedIn
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN_REQUEST: {
            return{
                ...state,
                isLoading : true,
                isError : false,
                isLoggedIn : false
            }
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem("currentUser", JSON.stringify(action.payload[0]))
            localStorage.setItem("isLoggedIn", JSON.stringify(true) )
            return{
                ...state,
                isLoggedIn : true,
                isError : false,
                isLoading : false,
                currentUser : action.payload[0]
            }
        }
        case LOGIN_FAILURE : {
            return{
                ...state,
                isLoading : false,
                isError : true,
                isLoggedIn : false
            }
        }
        case LOGIN_ERROR_HANDLING : {
            return{
                ...state,
                isLoading : false,
                isError : false,
                isLoggedIn : false,
            }
        }
        default:
            return state
    }
}

export {authReducer}