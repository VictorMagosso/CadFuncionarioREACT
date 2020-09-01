import React, { Component } from 'react';
import PageDefault from '../PageDefault';
import './index.css';

class AddFunc extends Component {

    constructor(){
        super();
        this.state = {
            title: 'Adicionar Funcionário',
            funcionarios: [],
            // cargo: []
        }
    }
    addFuncionario(event) {
        event.preventDefault();
        let data = {
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            position: this.refs.position.value,
            birthday: this.refs.birthday.value,
            salary: this.refs.salary.value,
            // descricao: this.refs.descricao.value
        };
        let request = new Request('http://localhost:3001/api/novo-funcionario', {
            method:'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });
        //xmlhttp
        fetch(request)
        .then(data => {
            console.log(data)
        })
    }
render(){
    return (
        <PageDefault>
<form className="form-add-func">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="name">Nome do funcionário *</label>
      <input type="text" className="form-control" ref='name' placeholder="Ex.: João"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="surname">Sobrenome do funcionário *</label>
      <input type="text" className="form-control" ref="surname" placeholder="Ex.: da Silva"/>
    </div>

  <div className="form-group col-md-6">
    <label htmlFor="birthday">Data de nascimento *</label>
    <input type="text" className="form-control" ref="birthday" placeholder="Ex.: 26-12-1984"/>
  </div>
    <div className="form-group col-md-6">
      <label htmlFor="salary">Salário *</label>
      <input type="text" className="form-control" ref="salary" placeholder="Ex.: 7.000,00"/>
  </div>
  <div className="form-group col-md-12">
    <label htmlFor="position">Cargo *</label>
    <input type="text" className="form-control" ref="position" placeholder="Ex.: Cozinheiro chefe"/>
  </div>
  <div className="form-group col-md-12">
      <label htmlFor="descricao">Descrição do cargo *</label>
      <textarea rows="7" type="text" className="form-control" ref="descricao" minLength="30"></textarea>
  </div>
        </div>
        <button onClick={this.addFuncionario.bind(this)} type="submit" className="btn btn-success">Adicionar <i className="fas fa-user-plus"></i></button>
</form>
        </PageDefault>
    
)}}

export default AddFunc;