const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const dotenv = require('dotenv')
dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.post("/booking/payment", (req, res) => {
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

module.exports = router