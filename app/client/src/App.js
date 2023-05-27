
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrearAutores from './Component/CrearAutores';
import ListaAutores from './Component/ListaAutores';
import EditarAutores from './Component/EditarAutores';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes >
          <Route path='/new' element={<CrearAutores />} />
          <Route path='/' element={<ListaAutores/>} />
         <Route path="/editar/:id" element={<EditarAutores/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
