const express = require("express")
const connect = require('./config/db')
const cors = require('cors')

const doctorsController = require('./controllers/doctor.controller')
const bookingController = require('./controllers/booking.controller')
const appointmentController = require('./controllers/appointment.controller')
const authController = require('./controllers/auth.controller')
const stripeController = require('./controllers/stripe.controller')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/doctors", doctorsController)
app.use("/bookings", bookingController)
app.use("/appointments", appointmentController)
app.use("/user", authController)
app.use("/booking", stripeController)


const start = async() => {
    await connect();
    app.listen(2233, () => {
        console.log("Listening to port 2233")
    })
}

module.exports = start