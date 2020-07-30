import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        {/* I */}
      </label>
    </div>
  )
}

export default FormField;

// Comentários:
/*
  I: Uma observação importante é que a função onChange detecta mudanças 
  não no input,mas sim mudanças no value desse input (no value que estamos 
  atribuindo ao input. Nesse caso, mudanças na variável nomeDaCategoria).
  A função Handler detecta a tentativa do usuário em mudar o valor do input 
  através da digitação, pega as informações desse evento (eventInfo) e 
  modifica/atualiza o valor da variável nomeDaCategoria através da função 
  setNomeDaCategoria. Obs: eventiInfo.target.value se trata justamente da 
  tecla que foi digitada naquele momento; toda vez que uma tecla é digitada 
  um evento é acionado.
*/