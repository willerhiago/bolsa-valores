    
import React from 'react'
import Popup from "reactjs-popup";
import Input from "./Input"
import InputSelect from "./InputSelect"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import './css/Input.css'
import './css/BtnComprar.css'

export default class BtnComprar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { open: false }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.compra = this.compra.bind(this)
      this.changeState = this.changeState.bind(this)
    }
    
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.setState({ open: false })
    }

    compra() {
      axios.post("http://localhost:8080/acao/compra?idAcao="+this.props.idAcao+"&idCorretora="+this.state.idCorretora+"&quant="+this.state.quant).then(function(callback){
         this.closeModal()
         NotificationManager.success('Compra feita com sucesso!','',2000)
         this.props.listAcao()
      }.bind(this));
      
    }

    changeState(type,novoDado){
      this.setState({
        [type]: novoDado
      })
    }

    render() {
      return (
        <div className="btnCad">
        <button type="button" className="btn btn-success" onClick={this.openModal}> <i className="fa fa-money"/>  {this.props.iconContent}</button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="popup">
                <div className="header"> <h5>Compra</h5> </div>
                <div className="form-group content col-xs-4">
                    <Input type="quant" description="Quantidade" placeholder={''} changeState={this.changeState}></Input>
                    <InputSelect type="idCorretora" changeState={this.changeState} description="Corretora"/>
                 </div>
                <div className="actions">
                    <button type="button" className="btn btn-info left-block buttonAdd" onClick={this.compra}> Confirmar </button>
                </div>
                <a className="close" onClick={this.closeModal}>
                    &times;
                </a>
            </div>
          </Popup>
        </div>
      )
    }
  }