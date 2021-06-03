const uri = require("../uri")
const mongoose = require('mongoose')

const connect = () =>{
    return mongoose.connect(uri , {
        useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify : false
    })
}

module.exports = connect;