import React from 'react';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './index.css';

const Menu = () => (
<div>
<nav className="menu">
<ul className="nav flex-column">
  <li className="nav-item">
    <Link className="nav-link active" to="/home"><i className="fas fa-home mr-2"></i>Página inicial</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/funcionarios"><i className="fas fa-users-cog mr-2"></i>Funcionários</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/addfuncionario"><i className="fas fa-user-plus mr-2"></i>Adicionar novo funcionário</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/descricao-cargos"><i className="fas fa-address-card mr-2"></i>Descrição de cargos</Link>
  </li>
</ul>
    <h4 className="mt-4 mb-4">Total de funcionários</h4>
    <h1><i className="fas fa-users"></i></h1>
    <h2>345</h2>
    <img src={Logo} width='40%'/>
</nav>
    </div>

);

export default Menu;