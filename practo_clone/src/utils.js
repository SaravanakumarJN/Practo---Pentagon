import axios from "axios";
const getBookedSlots = (doctor_id) => {
    return axios.get(`https://practo-server.herokuapp.com/doctors/${doctor_id}/bookings`);
}

const bookSlot = (body) => {
    return axios.post(`https://practo-server.herokuapp.com/bookings`, {...body})
}

const getDocData = (docId) => {
    return axios.get(`https://practo-server.herokuapp.com/doctors/${docId}`)
}

const getUserAppointments = (userId) => {
    return axios.get(`https://practo-server.herokuapp.com/appointments/${userId}`)
}

const getIndvDocData = (docId) => {
    return axios.get(`https://practo-server.herokuapp.com/doctors/${docId}`)
}

const cancelAppointment = (apptId) => {
    return axios.patch(`https://practo-server.herokuapp.com/appointments/${apptId}`, {status : false})
}


export {getBookedSlots, bookSlot, getDocData, getUserAppointments, getIndvDocData, cancelAppointment};