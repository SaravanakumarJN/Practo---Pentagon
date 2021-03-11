import React from 'react'
import {Switch, Route} from 'react-router-dom'
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
                <Navbar/>
                <h1>Hello</h1>
                <Footer/>
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
