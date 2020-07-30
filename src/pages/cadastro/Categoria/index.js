import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  /* I */
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
      /* V */
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          /* II */
          setCategorias([
            ...categorias,
            /* III */
            values
            /* IV */
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>
      

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;

// Comentários:
  /*
  I: O useState retorna um array de dois valores. O primeiro deles é
  um estado (nesse caso, o array que estamos passando entre parênteses, 
  pois ele se trata do valor inicial para esse estado) e o segundo é a 
  função que possibilita alterarmos o valor desse estado.
  Com a desfragmentação conseguimos colocar o estado na variável cate-
  gorias e a função na variável setCategorias.

  II: Toda vez que tentarmos submeter um formulário ele não será submetido 
  da forma default. Isso faz com que a página da aplicação não seja recarregada.

  III: Esses '...' antes do array 'categorias' é uma maneira de indicarmos ao 
  JavaScript para que ele não sobescreva os valores antigos pelos novos valores. 
  Em outras palavras, estamos dizendo, com os '...', para manter tudo que está 
  armazenado em 'categorias' + o(s) novo(s) valor(es) passado(s) (no caso, a 
  variável 'nomeDaCategoria').

  IV: Lembrando que o valor da variável 'nomeDaCategoria' está sendo atualizado e 
  administrado pela função HandleEvent presente no atributo onChange do input 
  responsável por capturar as novas categorias a serem cadastradas.

  V: O valor passado como primeiro parâmetro (chave) pode ser várias coisas
  (nome da categoria, descrição da categoria, cor da categoria); queremos que
  essa implementação aja de forma dinânica. Ao envolvermos a variável chave
  com colchetes definimos nessa linha qual dos campos do objeto iremos atingir 
  de acordo com o parâmetro passado na chamada da função.
  Em outras palavras, se for passado 'nome' na chamada da função como primeiro
  parâmetro, será o atributo nome do objeto em questão que será modificado.
  */