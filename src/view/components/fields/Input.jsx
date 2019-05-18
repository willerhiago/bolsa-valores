import React, { Component } from 'react'
 
export default class Input extends Component{
    render(){
        return(
        <div>
            <label><h6>{this.props.description}</h6></label>
            <input type={this.props.type} min="0" max={this.props.max} className="form-control" id={this.props.id} defaultValue={this.props.placeholder} onChange={(e) => this.props.changeState(this.props.chave, e.target.value)}></input>
        </div>
        )
    }
}