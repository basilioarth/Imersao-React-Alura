import React from 'react';

function ButtonLink(props) {
    // props => {className: "o que alguém passar", href: "/", children: "conteúdo da nossa tag"}
    // Tudo isso são informações que vêm com os valores dados aos parâmetros que são utilizados
    // na utilização desse componente. Cada uso desse componente vai passar uma informação própria.
    // Pode ser que em todas as vezes seja uma informação diferente. Essa é a magia e a utilidade dos 
    // componentes do React
    console.log(props);
    return (
        <a className = {props.className} href= {props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;