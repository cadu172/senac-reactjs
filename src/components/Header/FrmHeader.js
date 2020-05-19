import React from 'react';
import './FrmHeader.css';

function Header() {
    return(
        <header>
            <nav>
                <a href="/IncluirCadastro">Cadastro</a>
                <a href="/Listagem">Listagem</a>
            </nav>
        </header>
    );
}

export default Header;