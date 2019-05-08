import React, {Component} from 'react'
import TableCorretora from './TableCorretora'
import '../css/Corretoras.css'

export default class Corretoras extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
     }


    render(){
        return(
            <div className='content'>
                <h2>Corretoras</h2>
                <TableCorretora/>
            </div>
        )
    }
}