import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Bookingdetails from '../components/Bookingdetails'
import Landingpage from '../components/Landingpage'
import { DoctorResultPage } from '../pages/doctorsResultPage/DoctorsResultPage'
import { Pharmacy } from '../pages/Pharmacy'
import {PharmacyCategories} from "../pages/PharmacyCategories"
import {DoctorSearch} from '../components/doctorSearch/DoctorSearch'
import { SpecialityResultPage } from '../pages/SpecialityResultPage/SpecialityResultPage'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/">
                <Landingpage/>
                {/* <Bookingdetails/> */}
            </Route>
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

            </Route>
            <Route exact path = "/appointment/:doctors_id/:time">
                <Bookingdetails/> 
                <Footer/>
            </Route>
            <Route exact path = "/pharmacy"></Route>
            {/* <Route exact path = "/pharmacy">
                <Pharmacy/>
            </Route>
            <Route path = "/pharmacy/categories/">
                <PharmacyCategories/>
            </Route> */}
        </Switch>
    )
}

export {Routes}
