import React, { Component } from 'react';
import PageDefault from '../PageDefault';
import './index.css';

class Funcionarios extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Cadastro de funcionários',
      funcionarios: []
    }
  }
  componentDidMount() {
    console.log('dentro do Did Mount')
  }
  
  render () {
    return (
    <PageDefault>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Matrícula</th>
      <th scope="col">Nome</th>
      <th scope="col">Cargo</th>
      <th scope="col">Data de nascimento</th>
      <th scope="col">Salário</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jackson</td>
      <td>Supervisor de supervisores</td>
      <td>25/03/1996</td>
      <td>R$ 10.000,00
          <button className="edit-func"><i className="fas fa-pen"></i></button>
          <button className="edit-func"><i className="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  </tbody>
</table>
</PageDefault>
)}};

export default Funcionarios;