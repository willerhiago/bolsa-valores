import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export default class TableCorretora extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listCorretora = this.listCorretora.bind(this)
        this.listCorretora()
     }

     listCorretora (){
        axios.get("http://localhost:8080/corretora/").then(function(callback){
            this.setState({data : callback.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });
    };

     renderRows(){
        return this.state.data.map(corretora=>(
                <tr key={corretora.id}>
                    <td>{corretora.id}</td>
                    <td>{corretora.nome}</td>
                    <td></td>
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
                    <th>Ação</th>
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