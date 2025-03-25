import logo from './TF.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 
'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gerenciador de Tarefas e Relatórios para TO
        </p>
    </div>
  );
}

export default App;
