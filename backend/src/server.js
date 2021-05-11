const express = require("express")
const connect = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

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


const port = process.env.PORT || 2233
const start = async() => {
    await connect();
    app.listen(port, () => {
        console.log(`Listening to port ${port}`)
    })
}

module.exports = start