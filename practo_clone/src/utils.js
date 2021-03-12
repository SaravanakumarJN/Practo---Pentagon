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

export {getBookedSlots, bookSlot, getDocData};