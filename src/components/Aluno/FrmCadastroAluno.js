import React, {useState, useRef, useEffect} from 'react';
import "./FrmCadastroAluno.css";
import api from "../../services/api";

function FrmCadastroAluno() {

  /**
   * useState e useEffect
   * São chamados hooks
   ******************************/
  
  // valor padrão para aluno
  const valorInicial = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  const ref = useRef(null);  // é o mesmo efeito do ponteiro this que tem no javascript
  const [user, setUser] = useState(valorInicial);  // use state cria um objeto (uma estrutura), que pode ser usada nos campos diferetamente
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(null);
  const [responseErro, setResponseErro] = useState(null);
  
  /**
   * useEffect trabalha como o evento OnLoad do documento
   * verificar se quando ele executa os componentes já estão criados na janela
  */
  useEffect(()=>{
    if(ref.current.name==="name")
    ref.current.focus();
  },[ref]);

  // aqui eu passo a informaçãodigitada nos campos para o Json que será enviado para API
  function handlerChange(objeto) {
    setUser({
      ...user,
      [objeto.target.name]: objeto.target.value
    });
  };

  function verificaSenha() {    
    if ( user.password !== user.confirm_password ) 
      setErrorMessage("Senhas Diferentes")
    else setErrorMessage(null);

  }

  // submit
  function handleSubmit(p_form) {    
    
     // impedir recarregamento no submit
    p_form.preventDefault();

    // aqui zera as mensagens de erro
    setResponseErro(null);
    setResponse(null);

    // envia requisição para API
    api.post('users',user)
      .then(resposta => {
        setResponse("Cadastro Incluído com Sucesso");
        console.log(resposta); // imprimie o retorno no console
      })
      .catch(erro => {
        console.log(erro); // imprimie o retorno no console
        setResponseErro("Ocorreu o seguinte erro ao Gravar => " + erro.response.status + ' - ' + erro.response.statusText);        
      })

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Cadastro de Aluno</h3>
        {responseErro && <div className="errorAxios row">{responseErro}</div>}
        {response && <div className="successAxios row">{response}</div>}
        <div className="row">          
          <input
            ref={ref}
            type="text"
            name="name"            
            value={user.name}
            placeholder="Nome do Aluno"
            onChange={handlerChange}
          />
        </div>

        <div className="row">          
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={user.username}
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
            name="password"
            id="password"
            placeholder="Senha"
            value={user.password}
            onChange={handlerChange}
            onBlur={verificaSenha}
          />
        </div>

        <div className="row">          
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirmar Senha"
            value={user.confirm_password}
            onChange={handlerChange}
            onBlur={verificaSenha}
            className={errorMessage && 'inputError'}
          />
        </div>

        {errorMessage && <div className="row">
          <strong>{errorMessage}</strong>
        </div>}

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
