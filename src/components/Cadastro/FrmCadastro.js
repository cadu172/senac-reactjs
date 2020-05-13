import React, {useState, useEffect} from 'react';
import "./FrmCadastro.css";

/**
 * como consumir uma API com axios
 * https://celke.com.br/artigo/como-consumir-dados-da-api-com-react
 * 
 */

function FrmCadastro() {

  /**
   * useState e useEffect
   * São chamados hooks
   ******************************/
  
  // valor padrão para aluno
  const alunoPadrao = {
    nome: "",
    usuario: "",
    email: "",    
  };

   /**
   * a matriz abaixo (javascript), recebe um estado (state)
   * onde as posições na matriz
   * 0 -> representa o valor
   * 1 -> representa o evento (function)
   * no exemplo abaixo a função setAluno
   */
  const [aluno , setAluno ] = useState(alunoPadrao);
  const [arr_aluno, setArr_Alunos] = useState([]);

  useEffect(() => {
    
    //populaAluno();

    /*function populaAluno() {
      setAluno({
        nome: "Carlos",
        usuario: "cadu",
        email: "cadu172@gmail.com",
      });
    }*/
  }, []);

  /*const arr_alunos = [
    {id:1, nome: "carlos", usuario: "carlos.roberto", email: "email1@gmail.com"},
    {id:2, nome: "eduardo", usuario: "edu172", email: "email2@gmail.com"},
    {id:3, nome: "dos santos", usuario: "cesr", email: "email3@gmail.com"},
    {id:4, nome: "roberto", usuario: "croberto", email: "email4@gmail.com"},
  ];

  alunos.map(aluno=>{
    return(aluno.nome);
  });*/

  function handlerChange(objeto) {
    setAluno({
      ...aluno,
      [objeto.target.name]: objeto.target.value,
    });
  }

  function handleCadastrar(e) {
    
    // esta função serve para desabilitar as funções padrão do formulário
    e.preventDefault();
    
    // cria uma nova matriz com os dados atuais, adicionando um novo item
    const alunosMap = [...arr_aluno, aluno];

    // incluir no array aluno, um objeto aluno
    setArr_Alunos (alunosMap);

    // zerar formulário
    setAluno(alunoPadrao);

    //console.log(alunosMap);
  }

  function alunoEditar(p_Aluno) {
    // imprime o conteúdo do objeto aluno
    console.log(p_Aluno);
    // passar aluno atual para o formulário
    setAluno(p_Aluno)
  }

  /**
   * efetua o update no array
   * 
  */
  function persistirAlteracao() {
    
    // retorna o index de umaposição em uma matriz
    // findIndex recebe uma função como parametro
    // usamos uma arrow function
    // p_arr é o parametro que vai receber a matriz de localizacao
    // estamos comparando com aluno, porque são os dados que informamos no formulário
    // no meu exemplo, caso seja um novo e-mail, vai incluir, senão alterar
    const index = arr_aluno.findIndex((p_arr)=>p_arr.email===aluno.email);
    
    if(index < 0)
      // incluir novo
      arr_aluno.push(aluno)
    else
    // alterar existente
    arr_aluno[index] = aluno;
    
    // gravar alunos
    setArr_Alunos([...arr_aluno]);
    
    console.log(arr_aluno);
  }

  return (
    <>
      <form className="formulario" onSubmit={handleCadastrar}>
        <h3>Cadastro Usando Axios</h3>
        <div className="row">
          <span>Nome</span>
          <input
            type="text"
            name="nome"            
            value={aluno.nome}
            onChange={handlerChange}
          />
        </div>

        <div className="row">
          <span>Usuário</span>
          <input
            type="text"
            name="usuario"
            value={aluno.usuario}
            onChange={handlerChange}
          />
        </div>

        <div className="row">
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            id="email"
            value={aluno.email}
            onChange={handlerChange}
          />
        </div>

        <div className="row">
          <input type="submit"
            name="BtnGravar"
            id="BtnGravar"
            value="Cadastrar"/>

          <input type="button"
            name="BtnAlterar"
            id="BtnAlterar"
            value="Alterar Cadastro"
            onClick={()=>persistirAlteracao()} />

        </div>
      </form>
      <hr />
      <h1>Relação de Alunos</h1>
      <ul>
        {
        arr_aluno.map((aluno)=>(
            <li key={aluno.email}>
              <p><span>Nome:</span>{aluno.nome}</p>
              <p><span>Usuário:</span>{aluno.usuario}</p>
              <p><span>E-Mail:</span>{aluno.email}</p>
              <input 
                type="button" 
                name="BtnEditarAluno" 
                id="BtnEditarAluno"
                value="Alterar"
                onClick={() => alunoEditar(aluno)}
              />
            </li>
        ))
        }
      </ul>
    </>
  );
}

export default FrmCadastro;
