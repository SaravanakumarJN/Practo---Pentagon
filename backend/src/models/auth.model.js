const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    name: String,
    email : String,
    user_id : String,
    image_url : String,
    cancelled_appointments : Array
});


const Auth = mongoose.model("authentication", authSchema)

module.exports = Auth