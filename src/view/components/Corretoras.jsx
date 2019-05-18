import React, {Component} from 'react'
import TableCorretora from './TableCorretora'
import '../css/Corretoras.css'
import BtnNovaCorretora from './fields/BtnNovaCorretora'

export default class Corretoras extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.child = React.createRef()
        this.listCorretora = this.listCorretora.bind(this)
     }

     listCorretora(){
        this.child.current.listCorretora()
    }


    render(){
        return(
            <div className='content'>
                <h2 className="label"><i class="fa fa-suitcase"></i>  Corretoras</h2>
                <BtnNovaCorretora classButton="btn btn-primary center-block" classIcon="fa fa-plus" iconContent="Nova Corretora" listCorretora={this.listCorretora}/>
                <TableCorretora ref={this.child}/>
            </div>
        )
    }
}