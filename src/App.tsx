import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom'
import List from './components/List';
import Create from './components/Create';
import CategoryProvider from './context/CategoryContext';
import RecipeListProvider from './context/RecipeListContext';


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

  //const [recipeList, setRecipeList] = useState<recipeType[]>(JSON.parse(localStorage.getItem('recipeList') || '[]'))


  return (
    <div className="App">
        <NavBar />
        <CategoryProvider>
          <RecipeListProvider>
            <Routes>
              <Route path='/list/*' element={<List />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </RecipeListProvider>
        </CategoryProvider>
    </div>
  );
}

export default App;
