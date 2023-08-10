import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom'
import List from './components/List';
import Create from './components/Create';
import CategoryProvider from './context/CategoryContext';


export type ingredientsType = {
    ingredient: string,
    quantity: number,
    units: string
}

export type recipeType = {
  recipeName: string,
  ingredients: ingredientsType[],
  directions: string[],
  category: string[]
}

function App() {

  const [recipeList, setRecipeList] = useState<recipeType[]>(JSON.parse(localStorage.getItem('recipeList') || '[]'))

  useEffect(() => {
    localStorage.setItem('recipeList', JSON.stringify(recipeList))
  }, [recipeList])


  return (
    <div className="App">
        <NavBar />
        <CategoryProvider>
          <Routes>
            <Route path='/list/*' element={<List recipeList={recipeList} />} />
            <Route path='/create' element={<Create setRecipeList={setRecipeList} />} />
          </Routes>
        </CategoryProvider>
    </div>
  );
}

export default App;
