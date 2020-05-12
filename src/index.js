import React from 'react';
import ReactDOM from 'react-dom';
import FrmMain from './components/Main/FrmMain';
import FrmCadastroAluno from './components/Aluno/FrmCadastroAluno';
import FrmCadastro from './components/Cadastro/FrmCadastro';
import NotFound404 from './components/Error/NotFound404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/**
 * onde peguei o modelo de implementação de rotas com React
 * https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d
*/
ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={FrmMain} />
            <Route path="/Aluno" exact={true} component={FrmCadastroAluno} />
            <Route path="/Cadastro" component={FrmCadastro} />
            <Route path="*" component={NotFound404} />
        </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

