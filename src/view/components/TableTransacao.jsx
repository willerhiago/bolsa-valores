import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import '../css/TableTransacao.css'

export default class TableTransacao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listAcaoCorretora = this.listAcaoCorretora.bind(this)
        this.tipo= this.tipo.bind(this)
        this.listAcaoCorretora()
     }

     listAcaoCorretora (){
        axios.get("http://localhost:8080/acaoCorretora/").then(function(callback){
            this.setState({data : callback.data})
        }.bind(this)).catch(function(response){
            console.log(response)
        });
    };

    tipo(tipo){
        let result;
        if(tipo == 'V'){
            result = <td className='greenText'>Venda</td>
        }else{
            result = <td className='redText'>Compra</td>
        } 
        return result
    }
     renderRows(){
        return this.state.data.map(acaoCorretora=>(
                <tr key={acaoCorretora.id}>
                    <td>{acaoCorretora.id}</td>
                    <td>{acaoCorretora.nomeCorretora}</td>
                    <td>{acaoCorretora.nomeAcao}</td>
                    <td>{acaoCorretora.quant}</td>
                    <td>{acaoCorretora.valorVenda}</td>
                    <td>{acaoCorretora.quant*acaoCorretora.valorVenda}</td>
                    {this.tipo(acaoCorretora.tipo)}
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
                    <th>Corretora</th>
                    <th>Ação</th>
                    <th>Quantidade</th>
                    <th>Valor Unit.</th>
                    <th>Total</th>
                    <th>Tipo</th>
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