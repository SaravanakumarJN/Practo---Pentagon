const express = require('express')
const router = express.Router()
const Bookings = require('../models/booking.model')

router.get("/" , async (req, res) =>{
    const slots = await Bookings.find({status : true}).exec();
    res.status(200).json({data : slots});
});

router.post("/", async(req, res) => {
    const slot = await Bookings.create(req.body);
    res.status(201).json({data : slot});
})

// router.delete("/delete",async (req,res)=>{
//     const del= await Bookings.deleteMany({})
//     res.status(200).send("deleted")
// })

module.exports = router