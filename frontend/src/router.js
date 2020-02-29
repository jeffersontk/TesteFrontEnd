import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Channel from './pages/Channel'


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path='/details/:id' component={Details}></Route>
            <Route path='/channel/:id' component={Channel}></Route>
        </BrowserRouter>
    )
}