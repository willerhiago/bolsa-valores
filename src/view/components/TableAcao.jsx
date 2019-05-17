import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import BtnComprar from './fields/BtnComprar'

export default class TableAcao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listAcao = this.listAcao.bind(this)
        this.listAcao()
     }

     listAcao (){
        axios.get("http://localhost:8080/acao/ativas").then(function(callback){
            this.setState({data : callback.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });
    };

     renderRows(){
        return this.state.data.map(acao=>(
                <tr key={acao.id}>
                    <td>{acao.id}</td>
                    <td>{acao.nome}</td>
                    <td>{acao.description}</td>
                    <td>{acao.quant}</td>
                    <td>{acao.valor}</td>
                    <td className="text-center">
                    <BtnComprar className="btn btn-success" idAcao={acao.id} listAcao={this.listAcao}/>
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
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Atividade</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Ações</th>
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