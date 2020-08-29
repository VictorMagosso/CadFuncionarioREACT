import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Funcionarios from './Pages/Funcionarios'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
      <Route extact path="/" component={App} />
      <Route path="/funcionarios" component={Funcionarios} />
      <App/>
  </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);