const express = require('express')
const router = express.Router()
const Doctor = require('../models/doctor.model')
const Bookings = require('../models/booking.model')

router.get("/" , async (req, res) =>{
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
router.get("/:query/query", async(req, res) => {
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
router.get("//query", async(req, res) => {
    res.status(200).json({data : []})
})

//get based on speciality
router.get("/:speciality/speciality", async(req, res) => {
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
router.get("/:id/id", async(req, res) => {
    const {id} = req.params
    const doctor = await Doctor.find({
        id : id
    }).lean().exec()
    res.status(200).json({data : doctor})
})

router.get("/:id", async(req, res) =>{
    const {id} = req.params;
    const doctor = await Doctor.find({
        "_id" : id
    }).lean().exec()
    res.status(200).json({data : doctor})
});

//filter by consulting fee
router.get("/:speciality/speciality/:from/from/:to/to", async(req, res) => {
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

router.get("/:doctor_id/bookings", async(req, res) => {
    const id = req.params.doctor_id;
    const slots = await Bookings.find({doctor_id : id}).lean().exec();
    res.status(200).json({data : slots});
})

// router.get("/:doctor_id/bookings", async(req, res) => {
//     const id = req.params.doctor_id;
//     const slots = await Bookings.find({doctor_id : id}).lean().exec();
//     res.status(200).json({data : slots});
// })


module.exports = router