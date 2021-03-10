const express = require("express");
const mongoose = require("mongoose");
const uri = require("./uri");

const app = express();

app.use(express.json());

const connect = () =>{
    return mongoose.connect(uri , {
        useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
}

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

app.get("/doctors" , async (req, res) =>{
    const doctor = await Doctor.find({loc: {
        $near: {
          $geometry: {
             type: "Point" ,
             coordinates: [ 80.270186 , 13.0836939 ]
          },
        }
      }
   }).exec();
    res.status(200).json({data : doctor});
})


// app.post("/movies", async(req, res) => {
//     const user = await Movie.create(req.body);
//     res.send(201).json({data : user});
// })

// app.patch("/movies/:id", async(req, res) => {
//     const id = req.params.id;
//     const user = await Movie.findByIdAndUpdate(id, req.body);
//     res.send(200).json({data : user});
// })

// app.delete("/movies/:id", async(req, res) => {
//     const id = req.params.id;
//     const user = await Movie.deleteOne({"_id" : id});
//     res.send(200).json({data : user});
// })

// app.get("/movies/:id" , async (req, res) =>{
//     const id = +req.params.id;
//     const user = await Movie.find({"_id" : id}).exec();
//     res.status(200).json({data : user});
// })

const start = async() => {
    await connect();
    app.listen(2233, () => {
        console.log("Listening to port 2233");
    })
}

start();