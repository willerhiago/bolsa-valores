import React, {Component} from 'react'
import TableAcao from './TableAcao'
import '../css/Acao.css'
import BtnCadastrar from './fields/BtnCadastrar'

export default class Acao extends Component{
    constructor(props) {
        super(props)
        this.state = { data:[]}
        this.listAcao = this.listAcao.bind(this)
    }

     listAcao(){
         this.child.current.listAcao()
     }

    render(){
        return(
         <div className='content'>
             <h2 className="label"><i class="fa fa-bar-chart"></i>  Ações</h2>
             <BtnCadastrar classButton="btn btn-primary center-block" classIcon="fa fa-plus" iconContent="Cadastrar" listAcao={this.listAcao}/>
            <TableAcao ref={this.child}/>
         </div>   
        )
    }
    
}