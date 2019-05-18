import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Acao from './Acao'
import Corretoras from './Corretoras'
import Transacao from './Transacao'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/corretoras' component={Corretoras}></Route>
            <Route exact path='/acao' component={Acao}></Route>
            <Route exact path='/Transacao' component={Transacao}></Route>
            <Redirect from='*' to='/corretoras'></Redirect>
        </Switch>
    )
}

export default Routes