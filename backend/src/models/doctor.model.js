const mongoose = require('mongoose')

const doctorsSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    experience: Number,
    area: String,
    clinic_name:String,
    consulting_fee: Number,
    city: String,
    id: Number,
    likes: Number,
    description: String,
    image_url: String,
    loc : {
        type: Object,
        index : "2dsphere",
        required : true
    }
})

const Doctor = mongoose.model("doctor", doctorsSchema)

module.exports = Doctor