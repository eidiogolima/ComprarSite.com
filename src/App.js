import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './JS/Componentes/Pages/Home';
import Header from './JS/Componentes/Global/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
