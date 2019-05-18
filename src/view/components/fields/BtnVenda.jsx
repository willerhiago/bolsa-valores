    
import React from 'react'
import Popup from "reactjs-popup";
import Input from "./Input"
import InputSelect from "./InputSelect"
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
import './css/Input.css'
import './css/BtnVenda.css'

export default class BtnVenda extends React.Component {
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
      axios.post("http://localhost:8080/acao/?nome="+this.state.nome+"&quant="+this.state.quant+"&valor="+this.state.valor+"&description="+this.state.description+"&idCorretora="+this.state.idCorretora).then(function(callback){
        axios.post("http://localhost:8080/acaoCorretora/?idAcao="+callback.data.id+"&idCorretora="+this.state.idCorretora+"&valorVenda="+this.state.valor+"&quant="+callback.data.quant+"&tipo=V")
        this.closeModal()
         NotificationManager.success('Venda realizada com sucesso!','',2000)
         this.props.listAcao()
      }.bind(this));
      
    }

    changeState(key,novoNome){
      this.setState({
        [key]: novoNome
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
                    <Input type="text" chave="nome" description="Nome" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="text" chave="description" description="Descrição" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="number" chave="quant" description="Quantidade" placeholder={''} changeState={this.changeState}></Input>
                    <Input type="number" chave="valor" description="Valor" placeholder={''} changeState={this.changeState}></Input>
                    <InputSelect type="idCorretora" changeState={this.changeState} description="Corretora"/>
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