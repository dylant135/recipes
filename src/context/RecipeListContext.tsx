import React, { createContext, useState, useEffect } from "react";
import { recipeType } from "../App";

type initType = {
    recipeList: recipeType[],
    setRecipeList: React.Dispatch<React.SetStateAction<recipeType[]>>
}

const init = {
    recipeList: [],
    setRecipeList: () => {}
} as initType

export const recipeListContext = createContext(init)

type providerProps = {
    children: React.ReactNode
}

export default function RecipeListProvider({children}:providerProps) {
    const [recipeList, setRecipeList] = useState<recipeType[]>(JSON.parse(localStorage.getItem('recipeList') || '[]'))
    useEffect(() => {
        localStorage.setItem('recipeList', JSON.stringify(recipeList))
      }, [recipeList])
      
    return (
        <recipeListContext.Provider value={{
            recipeList,
            setRecipeList
        }}>
            {children}
        </recipeListContext.Provider>
    )
}

