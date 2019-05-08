import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

export default class TableBolsa extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[
            {
                "id": "1",
                "name":"Teste",
                "description": "blablabla"
            }
        ]}
     }

     renderRows(){
        return this.state.data.map(bolsa=>(
                <tr key={bolsa.id}>
                    <td>{bolsa.id}</td>
                    <td>{bolsa.name}</td>
                    <td>{bolsa.description}</td>
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
                    <th>Atividade</th>
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