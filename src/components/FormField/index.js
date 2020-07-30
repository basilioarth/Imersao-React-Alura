import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translate(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        {/* III */}
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }}
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `ìd_${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        {/* I */}
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
/* II */
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
  II: Quando algum elemento não é obrigatório (isRequired) precisamos definir
  um valor default pra ele. Por isso criamos o FormField.defaultProps e colocamos
  esses elementos lá dentro juntamento com o seu valor default.
  III: Se o valor antes do '&&' for verdadeiro, retorna o valor que está dps do '&&'.
  Caso contário, retorna o próprio valor antes do '&&'.
*/
