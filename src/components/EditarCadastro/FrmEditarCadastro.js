import React, {useCallback, useState, useEffect} from 'react';

import api from "../../services/api";


// ccs import
import "./FrmEditarCadastro.css";

export default function FrmEditarCadastro({param_usuario,return_callBack}) {

    const [usuario, setUser] = useState({
        email: "",
        name: "",
        password: "",
        username: "",        
        _id: ""        
    });    

    useEffect(()=>{
        setUser(param_usuario)
    },[param_usuario]);

    /**
     * atualiza o estado do usuário passado
     */
    const handleUpdateUser = useCallback(
        (objeto) => {
            setUser({
                ...usuario,
                [objeto.target.name]: objeto.target.value,
            });
            console.log(objeto.target.value);
        },
        [usuario]
    );

    /**
     * executa a gravação e envia a confirmação de sucesso (em caso de sucesso)
     */
    const salvarAlteracao = useCallback((p_Form)=> {
            
            // não recarregar a página em caso de submit
            p_Form.preventDefault();

            const id = usuario._id;
            
            api.put(`/users/${id}`, usuario)
                .then( (p_Success) => {
                    // somente retorna se houver sucesso
                    return_callBack({
                        error: 0,
                        status: "Gravado com Sucesso",
                    });
                })
                .catch( (p_Error) => {
                    //(pendente) ***** mostrar uma mensagem de erro nesta janela
                    console.log(p_Error.response.status + ' - ' + p_Error.response.statusText);
                })            
        },
        [return_callBack, usuario]
    );

    const handleCancelar = useCallback(()=>{
        return_callBack({
            error: -1,
            status: "",
        });
    },[return_callBack]);


    return (
        <div className="modalContainer">
            <form onSubmit={salvarAlteracao}> 
            <div className="modalBox">
                <div className="row">                    
                    <input type="text"
                        name="_id"
                        id="_id"
                        onChange={handleUpdateUser}
                        value={usuario._id}/>                    
                </div>                
                <div className="row">                    
                    <input type="text"
                        name="name"                        
                        id="name"                        
                        onChange={handleUpdateUser}
                        value={usuario.name}/>                    
                </div>                
                <div className="row">                    
                    <input type="text"
                        name="email"                        
                        id="email"                        
                        onChange={handleUpdateUser}
                        value={usuario.email}/>                    
                </div> 
                <div className="row">                    
                    <input type="text"
                        name="username"                        
                        id="username"                        
                        onChange={handleUpdateUser}
                        value={usuario.username}/>                    
                </div> 

                <div className="row">                    
                    <input type="text"
                        name="password"                        
                        id="password"                        
                        onChange={handleUpdateUser}
                        value={usuario.password}/>                    
                </div> 

                <div className="row">
                    <button
                        type="submit"
                        name="BtnGravar"
                        id="BtnGravar" >                        
                        Gravar Usuário
                    </button>                  

                    <button
                        type="button"
                        name="BtnCancelar"
                        id="BtnCancelar"
                        onClick={handleCancelar} >                        
                        Cancelar
                    </button>                  

                </div>
            </div>
            </form>
        </div>
    );
}