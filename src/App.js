import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Nav from './Components/Nav/Nav';
import Presentacion from './Components/Presentacion/Presentacion';

//Juegos
import Tateti from './views/Tateti/Tateti';
import Memotest from './views/Memotest/Memotest';

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
        <Routes>
          <Route path='/' element={<Presentacion/>}></Route>
          <Route path='/memotest' element={<Memotest />}></Route>
          <Route path='/tateti' element={<Tateti/>}></Route>
          <Route />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
