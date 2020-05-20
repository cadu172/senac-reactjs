import React from 'react';
import './FrmHeader.css';

import useHook from '../Hooks/useHook';

function Header() {

    const {usuario} = useHook();
    
    return(
        <header>
            <nav>                
                <a href="/">Home</a>
                <a href="/IncluirCadastro">Cadastro</a>                
                <a href="/Listagem">Listagem</a>
                <span>{usuario}, Seja Bem Vindo!</span>
            </nav>
        </header>
    );
}

export default Header;