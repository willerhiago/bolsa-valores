import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import {NotificationManager} from 'react-notifications';

export default class TableCorretora extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listCorretora = this.listCorretora.bind(this)
        this.deleteCorretora = this.deleteCorretora.bind(this)
        this.listCorretora()
     }

     listCorretora (){
        axios.get("http://localhost:8080/corretora/").then(function(callback){  
            this.setState({data : callback.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });
    };

    deleteCorretora(corretora){
        axios.delete("http://localhost:8080/corretora/" + corretora.id).then(function(callback){
            NotificationManager.success('Excluído com sucesso.','',2000)
            this.listCorretora()
        }.bind(this));
    };

     renderRows(){
        return this.state.data.map(corretora=>(
                <tr key={corretora.id}>
                    <td>{corretora.id}</td>
                    <td>{corretora.nome}</td>
                    <td className="text-center"><button type="button" className="btn btn-danger d-inline ml-2" onClick={(e) => this.deleteCorretora(corretora, e)}> <i className="fa fa-trash"/></button></td>
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
                    <th className="celula text-center">Excluir</th>
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