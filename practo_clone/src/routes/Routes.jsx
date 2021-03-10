import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Pharmacy } from '../pages/Pharmacy'
import {PharmacyCategories} from "../pages/PharmacyCategories"

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/">
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
