import React, {Component} from 'react'
import TableAcao from './TableAcao'
import '../css/Acao.css'

export default class Transacao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
     }
    render(){
        return(
         <div className='content'>
             <h2 className="label"><i class="fa fa-bar-chart"></i>  Ações</h2>
            <TableAcao/>
         </div>   
        )
    }
    
}