const express = require("express");
const mongoose = require("mongoose");
const uri = require("./uri");
const cors = require('cors');
const stripe = require('stripe')("sk_test_51ITniwLuzrELcYjAZlc55fGMQL8SQDAAeqN4smic3ZUMTvlWjhDQvsUQsEy2rTPI4aazIn8j8s6B2BZSG74XPNb600JHhUgpkB");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors())

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

// ***************** Doctor Search ********************

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
});

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

app.get("/doctors/:id", async(req, res) =>{
    const {id} = req.params;
    const doctor = await Doctor.find({
        "_id" : id
    }).lean().exec()
    res.status(200).json({data : doctor})
});

//filter by consulting fee
app.get("/doctors/:speciality/speciality/:from/from/:to/to", async(req, res) => {
    const {speciality, from, to} = req.params
    const {lat, long} = req.query
    const doctors = await Doctor.find({
        $and : [
            {
                specialization : new RegExp(speciality, "i")
            },
            {
                consulting_fee : {$gte : from}
            },
            {
                consulting_fee : {$lte : to}
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
    }).sort({consulting_fee : 1}).lean().exec()
    res.status(200).json({data : doctors})
})

// ***************** Payment ********************

//stripe integration
app.post("/booking/payment", (req, res) => {
    const {docData, token} = req.body
    const idempotencyKey = uuidv4()

    return stripe.customers.create({
        email : token.email,
        source : token.id
    })
    .then((customer) => {
        stripe.charges.create({
            amount: docData.price * 100,
            currency : "INR",
            customer: customer.id,
            receipt_email : token.email,
            description : `Booked appointment with ${docData.name}`
        }, {idempotencyKey : idempotencyKey},  function(err, charge) {0
          
        })
    })
    .then((result) => res.status(200).json(result))
    .catch((error) => console.log(error))
})


// ***************** Booking ********************
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

app.get("/bookings" , async (req, res) =>{
    const slots = await Bookings.find({status : true}).exec();
    res.status(200).json({data : slots});
});

app.post("/bookings", async(req, res) => {
    const slot = await Bookings.create(req.body);
    res.status(201).json({data : slot});
})

app.get("/doctors/:doctor_id/bookings", async(req, res) => {
    const id = req.params.doctor_id;
    const slots = await Bookings.find({doctor_id : id}).lean().exec();
    res.status(200).json({data : slots});
})
app.delete("/bookings/delete",async (req,res)=>{
    const del= await Bookings.deleteMany({})
    res.status(200).send("deleted")
})

app.get("/appointments/:id",async(req,res)=>{
    const id = req.params.id;
    const appointments= await Bookings.find({userId:id}).populate("doctor_id")
    .lean().exec();
    res.status(200).send({data: appointments})
})


app.patch("/appointments/:id",async(req,res)=>{
    const id = req.params.id;
    const appoint = await Bookings.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).send({data:appoint})
})

// ************** Authentication **************
const authSchema = new mongoose.Schema({
    name: String,
    email : String,
    user_id : String,
    image_url : String,
    cancelled_appointments : Array
});


const Auth = mongoose.model("authentication", authSchema)


//post 
app.post("/user/authentication", async(req, res) => {
    const {name, email, imageUrl, googleId} = req.body
    const userCheck = await Auth.find({user_id : googleId}).exec()
    if(userCheck.length == 0){
        const to_insert = {
            name : name,
            email : email,
            user_id : googleId,
            image_url : imageUrl
        }
        await Auth.insertMany([to_insert])
        const userCheckConformation = await Auth.find({user_id : googleId}).exec()
        res.status(200).json({data : userCheckConformation})
    }
    else{
        res.status(200).json({data : userCheck})
    }
    
})







// ****************Change by Mandar *********************

app.delete("/appointments/:id",async(req,res)=>{
    const id = req.params.id;
    const appoint = await Bookings.findByIdAndDelete({_id:id});
    res.status(200).send({data : appoint});
})


// app.get("/bookings" , async (req, res) =>{
//     const slots = await Bookings.find({}).exec();
//     res.status(200).json({data : slots});
// });

// app.post("/authentication", async(req, res) => {
//     const user = await .create(req.body);
//     res.status(201).json({data : user});
// })

// app.get("/doctors/:doctor_id/bookings", async(req, res) => {
//     const id = req.params.doctor_id;
//     const slots = await Bookings.find({doctor_id : id}).lean().exec();
//     res.status(200).json({data : slots});
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

start()