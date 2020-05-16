import React,{useEffect, useState} from 'react';
import api from '../../services/api';
import FrmCadastroUsuario from '../CadastroUsuario/FrmCadastroUsuario';
import './ListagemUsuario.css';

export default function Listagem() {

    // inicializar array que conterá a relaçao de usuários cadastrados
    const [arrUsuario, setListUsuario] = useState([]);

    // mensagem de erro
    const [errorMessage, setErrorMessage] = useState(null);

    // usuario atual que esta sendo alterado
    const [usuarioAtual, setUsuarioAtual] = useState(null);

    /**
     * Evento OnLoad
     * Obtem a relação de usuários cadastrados na API
     */
    useEffect(()=>{
        api.get("/users")
        .then(ret_ok => {
            setListUsuario(ret_ok.data);
            console.log(ret_ok)
        })
        .catch(ret_err => {
            setErrorMessage("Erro ao Obter Relação de Usuários Cadastrados => " + ret_err.response.status + ' - ' + ret_err.response.statusText);
            console.log(ret_err);
        })
    },[]);

    /**
     * 
     * @param {*} p_Value
     * Chamar o componente formulário para ediçao dos dados 
     */
    function handleEditar(p_Value) {
        //console.log(p_Value)
        setUsuarioAtual(p_Value);
    }

    return (
        <div>
            <div className="row">
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <table>
            <caption>Relaçao de Usuários Cadastrados</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>USUARIO</th>
                    <th>SENHA</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
            {arrUsuario.map(
                (usuario)=>(
                        <tr key={usuario._id}>
                            <td>{usuario._id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.password}</td>
                            <td>
                                <button
                                    onClick={()=>handleEditar(usuario)} >
                                    Editar
                                </button>
                            </td>
                        </tr>
                )
            )}
            </tbody>
            </table>
            </div>
            <div className="row">
                {usuarioAtual && <FrmCadastroUsuario usuario={usuarioAtual} /> }
            </div>
        </div>
    );

}