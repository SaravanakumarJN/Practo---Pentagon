import axios from "axios";
const getBookedSlots = (doctor_id) => {
    return axios.get(`http://localhost:2233/doctors/${doctor_id}/bookings`);
}

const bookSlot = (body) => {
    return axios.post(`http://localhost:2233/bookings`, {...body})
}

export {getBookedSlots, bookSlot};