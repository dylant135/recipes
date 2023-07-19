import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom'
import List from './components/List';
import Create from './components/Create';


export type ingredientsType = {
    ingredient: string,
    quantity: number,
    units: string
}

export type recipeType = {
  recipeName: string,
  ingredients: ingredientsType[],
  directions: string[]
}

function App() {
  const [recipeList, setRecipeList] = useState<recipeType[]>([])


  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/list' element={<List recipeList={recipeList} />} />
          <Route path='/create' element={<Create setRecipeList={setRecipeList} />} />
        </Routes>
    </div>
  );
}

export default App;
