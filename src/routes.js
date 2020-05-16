import React from 'react';
import Main from './Main';
import FrmCadastroAluno from './components/Aluno/FrmCadastroAluno';
import FrmCadastroUsuario from './components/CadastroUsuario/FrmCadastroUsuario';
import Listagem from './components/Listagem/ListagemUsuario';
import NotFound404 from './components/Error/NotFound404';
import { BrowserRouter,
         Switch,
         Route } from 'react-router-dom';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>            
            <Route path="/" exact={true} component={Main} />
            <Route path="/Aluno" exact={true} component={FrmCadastroAluno} />
            <Route path="/Usuario" component={FrmCadastroUsuario} />
            <Route path="/Listagem" component={Listagem} />
            <Route path="*" component={NotFound404} />
        </Switch>
        </BrowserRouter>        
    );
}