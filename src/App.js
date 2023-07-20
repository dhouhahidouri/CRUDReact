import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddProd from './components/Produits/AddProd';
import EditProd from './components/Produits/EditProd';
import ListeProd from './components/Produits/ListeProd';
import ProductSearch from './components/Produits/ProductSearch';
function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<ListeProd/>} />
          <Route path='/createProd' element={<AddProd />} />
          <Route path='/editProd' element={<EditProd />} />
          <Route path='/ProductSearch' element={<ProductSearch />}/>

        </Routes>
      </Router> 
    </div>
  );
}

export default App;