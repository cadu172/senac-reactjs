import React, {useState} from 'react';
import "./FrmCadastroAluno.css";

function FrmCadastroAluno() {

  /**
   * useState e useEffect
   * São chamados hooks
   ******************************/
  
  // valor padrão para aluno
  const valorInicial = {
    nome: "",
    usuario: "",
    email: "",
    senha: "",
    confirm_senha: ""
  };
  
  const [user, setUser] = useState(valorInicial);

  
  function handlerChange(objeto) {
    setUser({
      ...user,
      [objeto.target.name]: objeto.target.value
    });
  };

  function verificaSenha() {
    
    if ( user.senha !== user.confirm_senha ) 
      console.log("senhas diferentes")
      else console.log("senhas iguais");

  }

  return (
    <div className="container">
      <form>
        <h3>Cadastro de Aluno</h3>
        <div className="row">          
          <input
            type="text"
            name="nome"            
            value={user.name}
            placeholder="Nome do Aluno"
            onChange={handlerChange}
          />
        </div>

        <div className="row">          
          <input
            type="text"
            name="usuario"
            placeholder="Nome de Usuário"
            value={user.usuario}
            onChange={handlerChange}
          />
        </div>

        <div className="row">          
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-Mail"
            value={user.email}
            onChange={handlerChange}
          />
        </div>

        <div className="row">          
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            value={user.senha}
            onChange={handlerChange}
            onBlur={verificaSenha}
          />
        </div>

        <div className="row">          
          <input
            type="password"
            name="confirm_senha"
            id="confirm_senha"
            placeholder="Confirmar Senha"
            value={user.confirm_senha}
            onChange={handlerChange}
            onBlur={verificaSenha}
          />
        </div>

        <div className="errorMessage">
          Senhas diferentes
        </div>

        <div className="row">
          <button type="submit"
            name="BtnGravar"
            id="BtnGravar">Cadastro</button>
        </div>
      </form>
    </div>
  );
}

export default FrmCadastroAluno;
