import React from 'react';

// ccs import
import "./FrmCadastroUsuario.css";

export default function FrmCadastroUsuario({usuario}) {

    return (
        <div className="modalContainer">
            <form>
            <div className="modalBox">
                <div className="row">                    
                    <input type="text"
                        name="_id"
                        id="_id"
                        value={usuario._id}/>                    
                </div>                
                <div className="row">                    
                    <input type="text"
                        name="name"
                        id="name"
                        value={usuario.name}/>                    
                </div>                
                <div className="row">                    
                    <input type="text"
                        name="email"
                        id="email"
                        value={usuario.email}/>                    
                </div> 
                <div className="row">                    
                    <input type="text"
                        name="username"
                        id="username"
                        value={usuario.username}/>                    
                </div> 

                <div className="row">                    
                    <input type="text"
                        name="password"
                        id="password"
                        value={usuario.password}/>                    
                </div> 

                <div className="row">
                    <button
                        type="submit"
                        name="BtnGravar"
                        id="BtnGravar">
                        Gravar Usuário
                    </button>                  
                </div>
            </div>
            </form>
        </div>
    );
}