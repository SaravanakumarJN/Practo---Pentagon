import { GET_DOCTORS_ERROR_HANDLE, GET_DOCTORS_FAILURE, GET_DOCTORS_REQUEST, GET_DOCTORS_SUCCESS } from "./actionType"

const initState = {
    isLoading : false,
    isError : false,
    isSuccess : false,
    doctorsList : []
}

const doctorsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_DOCTORS_REQUEST:{
            return{
                ...state,
                isLoading : true,
                isError : false,
                isSuccess : false
            }
        }
        case GET_DOCTORS_SUCCESS:{
            return{
                ...state,
                isLoading : false,
                isError : false,
                isSuccess : true,
                doctorsList : action.payload
            }
        }
        case GET_DOCTORS_FAILURE:{
            return{
                ...state,
                isLoading : false,
                isSuccess : false,
                isError : true
            }
        }
        case GET_DOCTORS_ERROR_HANDLE:{
            return{
                ...state,
                isLoading : false,
                isSuccess : false,
                isError : false
            }
        }
        default:
            return state
    }
}

export {doctorsReducer}