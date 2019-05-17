import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Acao from './Acao'
import Corretoras from './Corretoras'


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/corretoras' component={Corretoras}></Route>
            <Route exact path='/acao' component={Acao}></Route>
            <Redirect from='*' to='/corretoras'></Redirect>
        </Switch>
    )
}

export default Routes