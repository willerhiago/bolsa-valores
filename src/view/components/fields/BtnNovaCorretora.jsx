    
import React from 'react'
import Popup from "reactjs-popup";
import Input from "./Input"
import InputSelect from "./InputSelect"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import './css/Input.css'
import './css/BtnNovaCorretora.css'

export default class BtnNovaCorretora extends React.Component {
    constructor(props) {
      super(props)
      this.state = { open: false }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.novaCorretora = this.novaCorretora.bind(this)
      this.changeState = this.changeState.bind(this)
    }
    
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.setState({ open: false })
    }

    novaCorretora() {
      axios.post("http://localhost:8080/corretora/?nome="+this.state.nome).then(function(callback){
         this.closeModal()
         NotificationManager.success('Salvo com sucesso!','',2000)
         this.props.listCorretora()
      }.bind(this));
      
    }

    changeState(key,novoDado){
      this.setState({
        [key]: novoDado
      })
    }

    render() {
      return (
        <div className="btnCad">
        <button type="button" className={this.props.classButton} onClick={this.openModal}> <i className={this.props.classIcon}/>  {this.props.iconContent}</button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="popup">
                <div className="header"> <h5>Nova Corretora</h5> </div>
                <div className="form-group content col-xs-4">
                    <Input type="text" chave="nome" description="Nome" placeholder={''} changeState={this.changeState}></Input>
                 </div>
                <div className="actions">
                    <button type="button" className="btn btn-info left-block buttonAdd" onClick={this.novaCorretora}> Confirmar </button>
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