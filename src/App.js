
import './App.css';
import Home from './pages/Home';
import NavbarComp from './component/NavbarComp';
import About from './pages/About';
import Services from './pages/Services';
import Katalog from './pages/Katalog';
import Subscribe from './pages/Subscribe';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Home/>
      <About/>
      <Services/>
      <Katalog/>
      <Subscribe/>
    </div>
  );
}

export default App;
