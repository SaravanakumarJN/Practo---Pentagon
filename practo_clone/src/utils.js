import axios from "axios";
const getBookedSlots = (doctor_id) => {
    return axios.get(`http://localhost:2233/doctors/${doctor_id}/bookings`);
}

const bookSlot = (body) => {
    return axios.post(`http://localhost:2233/bookings`, {...body})
}

const getDocData = (docId) => {
    return axios.get(`http://localhost:2233/doctors/${docId}`)
}

const getUserAppointments = (userId) => {
    return axios.get(`http://localhost:2233/appointments/${userId}`)
}

const getIndvDocData = (docId) => {
    return axios.get(`http://localhost:2233/doctors/${docId}`)
}

const cancelAppointment = (apptId) => {
    return axios.patch(`http://localhost:2233/appointments/${apptId}`, {status : false})
}


export {getBookedSlots, bookSlot, getDocData, getUserAppointments, getIndvDocData, cancelAppointment};