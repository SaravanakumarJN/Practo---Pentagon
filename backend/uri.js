require('dotenv').config()

console.log(process.env.MONGO_PASS);


const uri = `mongodb+srv://mandarsatam:${process.env.MONGO_PASS}@cluster0.lb1tj.mongodb.net/practo?retryWrites=true&w=majority`

module.exports = uri;