import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { BookingCard, bookingCard } from '../components/BookingCard'
import { DemoPage } from '../pages/DemoPage'
import { Pharmacy } from '../pages/Pharmacy'
import {PharmacyCategories} from "../pages/PharmacyCategories"

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/">
                <DemoPage/>
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
