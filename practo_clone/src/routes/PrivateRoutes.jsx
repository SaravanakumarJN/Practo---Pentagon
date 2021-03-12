import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoutes = ({children, path}) => {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    return (
        isLoggedIn === true
        ? <Route path = {path}>{children}</Route>
        : <Redirect to = "/login"></Redirect>
    )   
}

export {PrivateRoutes}
