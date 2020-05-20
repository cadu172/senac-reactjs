import React, {useState} from 'react';
import './Main.css';

import userHook from "./components/Hooks/useHook";

function Main() {

    const {adicionarUsuario} = userHook();
    const [usuario, setNomeUsuario] = useState(null);

    return (
        <div className="container_main">            
            <div name="loginContaine">
                <div className="row">
                <h3>Aula de Laboratório SENAC - React JS</h3>            
                </div>                
                <div className="row">
                    <input type="text"
                        name="edtUsuario"
                        id="edtUsuario"
                        value={undefined}
                        onChange={(e) => setNomeUsuario(e.target.value)}                        
                    />                    
                </div>
                <div className="row">
                    <button
                        onClick={() => adicionarUsuario(usuario)} >
                        Incluir Usuário
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;