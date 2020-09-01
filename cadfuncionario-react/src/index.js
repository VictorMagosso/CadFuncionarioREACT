import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Funcionarios from './Pages/Funcionarios'
import AddFunc from './Pages/AddFunc';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
      <Route exact path="/" component={App} />
      <Route path="/funcionarios" component={Funcionarios} />
      <Route path="/addfuncionario" component={AddFunc} />
      <App/>
  </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);