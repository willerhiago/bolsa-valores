    
import React from 'react'
import Popup from "reactjs-popup";
import Input from "./Input"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import './css/Input.css'
import './css/BtnCadastrar.css'

export default class BtnCadastrar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { open: false }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.novaAcao = this.novaAcao.bind(this)
      this.changeState = this.changeState.bind(this)
    }
    
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.setState({ open: false })
    }

    novaAcao() {
      axios.post("http://localhost:8080/acao/?nome="+this.state.nome+"&quant="+this.state.quant+"&valor="+this.state.valor+"&description="+this.state.description).then(function(callback){
         this.closeModal()
         NotificationManager.success('Ação cadastrada com sucesso','',2000)
         this.props.listAcao()
      }.bind(this));
      
    }

    changeState(type,novoNome){
      this.setState({
        [type]: novoNome
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
                <div className="header"> <h5>Ação</h5> </div>
                <div className="form-group content col-xs-4">
                    <Input type="nome" description="Nome" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="description" description="Descrição" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="quant" description="Quantidade" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="valor" description="Valor" placeholder={''} changeState={this.changeState}></Input>
                </div>
                <div className="actions">
                    <button type="button" className="btn btn-info left-block buttonAdd" onClick={this.novaAcao}> Confirmar </button>
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