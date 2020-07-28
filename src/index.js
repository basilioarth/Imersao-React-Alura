import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  {/* Encapsula todos os elementos da nossa aplicação em um único conteiner */}
    <Switch>
    {/* Funciona como um condicional que detecta qual a rota escolhida pelo usuário */}
      <Route path="/" component={Home} exact/>
      {/* Especifica qual componente deve ser renderizado a partir de qual rota escolhida */}
      {/* Caso não colocássemos o exact, na hora que o Switch encontrasse uma / ele já abriria o App, independentemente de
      ter mais alguma coisa dps dessa barra ou não (como no caso do path /cadastro/video) */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>Página 404</div>)} />
      {/* Ao retirarmos o path fazemos com que esse componente seja ativado quando alguma rota sem
      sentido for escolhida pelo usuário*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

