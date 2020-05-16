import React from 'react';
import './FrmHeader.css';

function Header() {
    return(
        <header>
            <nav>
                <a href="/Aluno">Cadastro de Alunos</a>
                <a href="/Listagem">Listagem</a>
            </nav>
        </header>
    );
}

export default Header;