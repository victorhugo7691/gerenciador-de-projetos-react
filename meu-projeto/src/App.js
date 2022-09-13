import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const name = "Super Veloz";
  const newName = name.toUpperCase();

  const pessoa = {
    nome: "Rodrigo",
    idade: 19,
    profissao: "DevOps"
  }

  function soma(a, b){
    return a+b;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>REACT</h1>
      <HelloWord/>
      <p>Você está acessando {name}</p>
      <p>Nome maiúsculo {newName} </p>
      <p>Valor da soma:{soma(2, 3)}</p>
      <img src={url} alt="Minha imagem"/>
      <SayMyName nome="Victor"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome = {name}/>

      <Pessoa nome= {pessoa.nome} idade= {pessoa.idade} profissao= {pessoa.profissao} foto="https://via.placeholder.com/150"/>
    
      <List/>

      <h1>Eventos</h1>
      <Eventos numero={1}/>

      <Form/>

      <h1>Rederização por condição</h1>
      <Condicional />
      
    </div>
  );
}

export default App;
