import logo from './img/Fatia de pizza minimalista.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import Cadastrar from './screens/Register'
import Loja from './screens/Store';
import NavBar from './components/navbar';//ifydtfuygujipkjhgyfdtryughjkl,
//importante (add pelo prof, serve pra afirma as rotas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </header>

        <div className="App-fundo" alt="fundo"></div>
        
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Cadastrar />} />
            <Route path="/store" element={<Loja />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
