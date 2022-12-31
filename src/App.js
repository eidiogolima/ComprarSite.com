import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './JS/Componentes/Pages/Home';
import Header from './JS/Componentes/Global/Header';
import Footer from './JS/Componentes/Global/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
