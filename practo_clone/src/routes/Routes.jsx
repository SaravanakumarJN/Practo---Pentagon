import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Bookingdetails from '../components/Bookingdetails'
import Landingpage from '../components/Landingpage'
import { DoctorResultPage } from '../pages/doctorsResultPage/DoctorsResultPage'
import {DoctorSearch} from '../components/doctorSearch/DoctorSearch'
import { SpecialityResultPage } from '../pages/SpecialityResultPage/SpecialityResultPage'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { LoginPage } from '../pages/loginPage/LoginPage'
import { AppointmentsCard } from '../components/Appointments/AppointmentsCard'
import { Appointments } from '../pages/Appointments/Appointments'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/login">
                <LoginPage/>
                <Footer/>
            </Route>
            <Route exact path = "/">
                <Navbar/>
                <Landingpage/>
                {/* <Bookingdetails/> */}
                {/* <Landingpage/> */}
                <Footer/>
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
                <Navbar/>
                <Bookingdetails/> 
                <Footer/>
            </Route>
            <Route exact path = "/appointment/:userId">
                <Navbar/>
                <Appointments/> 
                <Footer/>
            </Route>
            
  
        </Switch>
    )
}

export {Routes}
