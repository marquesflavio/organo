import Banner from './compenentes/Banner';
import CampoTexto from './compenentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
     
    </div>
  );
}

export default App;
