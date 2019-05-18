import React, {Component} from 'react'
import TableTransacao from './TableTransacao'
import '../css/Acao.css'

export default class Transacao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
     }
    render(){
        return(
         <div className='content'>
             <h2 className="label"><i class="fa fa-exchange"></i>  Transações</h2>
            <TableTransacao/>
         </div>   
        )
    }
    
}