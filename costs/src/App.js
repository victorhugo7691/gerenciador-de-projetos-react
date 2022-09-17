import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/company" element={<Company/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/newproject" element={<NewProject/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
