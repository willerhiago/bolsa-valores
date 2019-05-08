import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Bolsa from './Bolsa'
import Corretoras from './Corretoras'


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/corretoras' component={Corretoras}></Route>
            <Route exact path='/bolsa' component={Bolsa}></Route>
            <Redirect from='*' to='/corretoras'></Redirect>
        </Switch>
    )
}

export default Routes