import React, {Component} from 'react'
import TableBolsa from './TableBolsa'
import '../css/Bolsa.css'

export default class Bolsa extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
     }
    render(){
        return(
        <TableBolsa/>
        )
    }
    
}