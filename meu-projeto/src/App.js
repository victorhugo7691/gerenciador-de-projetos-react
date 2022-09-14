import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';


import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/footer';

function App() {

  return (
    <Router>
      
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
