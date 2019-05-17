import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

export default class TableCorretora extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
     }

     renderRows(){
        return this.state.data.map(corretora=>(
                <tr key={corretora.id}>
                    <td>{corretora.id}</td>
                    <td>{corretora.name}</td>
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