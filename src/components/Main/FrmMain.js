import React from 'react';
import { Link } from 'react-router-dom'

function FrmMain() {
    return(
        <>
            <h1>SENAC => Front-End (ReactJS)</h1>
            <ul>
                <li><Link to="/Aluno">Cadastro de Alunos</Link></li>
                <li><Link to="/Cadastro">Acessando API com Axios</Link></li>
            </ul>
        </>
    );
}

export default FrmMain;