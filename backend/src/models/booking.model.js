const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    doctor_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "doctor",
        required : true
    },
    name : String,
    contact : String,
    time : String,
    status:Boolean,
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authentication",
        required : true
    }
});

const Bookings = mongoose.model("booking", bookingSchema)

module.exports = Bookings