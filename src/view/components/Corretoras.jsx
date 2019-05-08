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
            <TableCorretora/>
        )
    }
}