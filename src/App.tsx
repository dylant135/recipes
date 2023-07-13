import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom'
import List from './components/List';
import Create from './components/Create';
import ListProvider from './context/ListContext';

export type listType = {
  ingredients: [],
  directions: []
}

function App() {
  return (
    <div className="App">
      <ListProvider>
        <NavBar />
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </ListProvider>
    </div>
  );
}

export default App;
