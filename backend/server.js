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

//get all doctors
app.get("/doctors" , async (req, res) =>{
    const {lat, long} = req.query
    const doctor = await Doctor.find({loc: {
        $nearSphere: {
          $geometry: {
             type: "Point" ,
             coordinates: [ Number(lat) || 13.0827 ,Number(long) || 80.2707 ],
          },
          $maxDistance : 400000
        }
      }
   }).exec();
    res.status(200).json({data : doctor});
})

//get search 
app.get("/doctors/:query/query", async(req, res) => {
    const {query} = req.params
    const {lat, long} = req.query
    const doctor = await Doctor.find({$and : [
        {
            $or : [
                {
                    name : new RegExp(query, "i"),
                },
                {
                    clinic_name : new RegExp(query, "i")
                }
            ]
        },
        {
            loc : {
                $near : {
                    $geometry : {
                        type : "Point",
                        coordinates : [Number(lat), Number(long)]
                    },
                    $maxDistance : 400000
                }
            }
        }
    ]
    }).lean().exec()
    res.status(200).json({data : doctor})
})

//search none
app.get("/doctors//query", async(req, res) => {
    res.status(200).json({data : []})
})

//get based on speciality
app.get("/doctors/:speciality/speciality", async(req, res) => {
    const {speciality} = req.params
    const {lat, long} = req.query
    const doctor = await Doctor.find({
        specialization : new RegExp(speciality, "i"),
        loc: {
            $near: {
              $geometry: {
                 type: "Point" ,
                 coordinates: [ Number(lat),Number(long) ]
              },
              $maxDistance : 400000
            }
        }
    }).lean().exec()
    res.status(200).json({data : doctor})
})

//get individual item on click
app.get("/doctors/:id/id", async(req, res) => {
    const {id} = req.params
    const doctor = await Doctor.find({
        id : id
    }).lean().exec()
    res.status(200).json({data : doctor})
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