const express = require('express')
const router = express.Router()
const Auth = require('../models/auth.model')

router.post("/authentication", async(req, res) => {
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

module.exports = router