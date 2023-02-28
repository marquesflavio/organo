import { useState } from 'react';
import Banner from './compenentes/Banner';
import Formulario from './compenentes/Formulario';
import Time from './compenentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) // spread operator para pegar todos os dados antigos e adicionar novos

  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End" />
      <Time nome="Data Science"/>
      <Time nome="DevOps" />
      <Time nome="UX e Design" />
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão" />
    </div>
  );
}

export default App;
