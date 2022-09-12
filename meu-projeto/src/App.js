import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld';

function App() {

  const name = "Super Veloz";
  const newName = name.toUpperCase();

  function soma(a, b){
    return a+b;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>REACT</h1>
      <p>Você está acessando {name}</p>
      <p>Nome maiúsculo {newName} </p>
      <p>Valor da soma:{soma(2, 3)}</p>
      <img src={url} alt="Minha imagem"/>

      <HelloWord/>
    </div>
  );
}

export default App;
