import React from 'react'
import {Switch, Route} from 'react-router-dom'
<<<<<<< HEAD
import { BookingCard, bookingCard } from '../components/BookingCard'
import { DemoPage } from '../pages/DemoPage'
=======
import { DoctorResultPage } from '../pages/doctorsResultPage/DoctorsResultPage'
>>>>>>> e6e935f6b322456b7874d229924a4993f6ec2ed1
import { Pharmacy } from '../pages/Pharmacy'
import {PharmacyCategories} from "../pages/PharmacyCategories"
import {DoctorSearch} from '../components/doctorSearch/DoctorSearch'
import { SpecialityResultPage } from '../pages/SpecialityResultPage/SpecialityResultPage'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'

const Routes = () => {
    return (
        <Switch>
<<<<<<< HEAD
            <Route exact path = "/">
                <DemoPage/>
=======
            <Route exact path = "/doctors">
                <Navbar/>
                <DoctorSearch/>
                <Footer/>
            </Route>
            <Route exact path = "/doctors/:id/id">
                <Navbar/>
                <DoctorResultPage/>
                <Footer/>
            </Route>
            <Route exact path = "/doctors/:speciality/speciality/:lat/lat/:long/long">
                <Navbar/>
                <SpecialityResultPage/>
                <Footer/>
>>>>>>> e6e935f6b322456b7874d229924a4993f6ec2ed1
            </Route>
            <Route exact path = "/pharmacy">
                <Pharmacy/>
            </Route>
            <Route path = "/pharmacy/categories/">
                <PharmacyCategories/>
            </Route>
        </Switch>
    )
}

export {Routes}
