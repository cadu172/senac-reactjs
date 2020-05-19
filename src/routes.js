import React from 'react';
import Main from './Main';
import FrmEditarCadastro from './components/EditarCadastro/FrmEditarCadastro';
import FrmIncluirCadastro from './components/IncluirCadastro/FrmIncluirCadastro';
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
            <Route path="/EditarCadastro" exact={true} component={FrmEditarCadastro} />
            <Route path="/IncluirCadastro" component={FrmIncluirCadastro} />
            <Route path="/Listagem" component={Listagem} />
            <Route path="*" component={NotFound404} />
        </Switch>
        </BrowserRouter>        
    );
}