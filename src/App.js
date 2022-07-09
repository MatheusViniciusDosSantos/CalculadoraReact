import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculadora from "./components/calculadora/Calculadora"

function App() {
  return (
    <div className="App">
      <Header nome="Matheus"/>
      <Calculadora/>
      <Footer/>
    </div>
  );
}

export default App;
