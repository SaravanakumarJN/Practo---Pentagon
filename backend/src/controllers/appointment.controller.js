const express = require('express')
const router = express.Router()
const Bookings = require('../models/booking.model')

router.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const appointments= await Bookings.find({userId:id}).populate("doctor_id")
    .lean().exec();
    res.status(200).send({data: appointments})
})

router.patch("/:id",async(req,res)=>{
    const id = req.params.id;
    const appoint = await Bookings.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).send({data:appoint})
})

router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    const appoint = await Bookings.findByIdAndDelete({_id:id});
    res.status(200).send({data : appoint});
})

module.exports = router