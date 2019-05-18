import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import BtnComprar from './fields/BtnComprar'
import {NotificationManager} from 'react-notifications';
import '../css/TableAcao.css'

export default class TableAcao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listAcao = this.listAcao.bind(this)
        this.deleteAcao= this.deleteAcao.bind(this)
        this.listAcao()
     }

     listAcao (){
        axios.get("http://localhost:8080/acao/ativas").then(function(callback){
            this.setState({data : callback.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });
    };

    deleteAcao(acao){
        axios.delete("http://localhost:8080/acao/" + acao.id).then(function(callback){
            NotificationManager.success('Excluído com sucesso.','',2000)
            this.listAcao()
        }.bind(this));
    }

     renderRows(){
        return this.state.data.map(acao=>(
                <tr key={acao.id}>
                    <td>{acao.nome}</td>
                    <td>{acao.description}</td>
                    <td>{acao.quant}</td>
                    <td>{acao.valor}</td>
                    <td className="text-center">
                    <BtnComprar className="btn btn-success" idAcao={acao.id} max={acao.quant} listAcao={this.listAcao}/>
                    <button type="button" className="btn btn-danger d-inline ml-2" onClick={(e) => this.deleteAcao(acao, e)}> <i className="fa fa-trash"/></button>
                    </td>
                </tr>
            )
        )
    }

     render(){
        return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Atividade</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th className="text-center celula">Comprar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>;
        </div>
        )
    }
    
}