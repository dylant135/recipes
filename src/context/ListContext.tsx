import React, { createContext, useState, useEffect} from "react";
import { listType } from "../App";


type ContextType = {
    recipeList: listType,
    setRecipeList: React.Dispatch<React.SetStateAction<listType>>
}

export const ListContext = createContext<ContextType[]>([] as ContextType)

type ProviderProps = {
    children: React.ReactNode
}

export default function ListProvider({children}:ProviderProps) {
    const [recipeList, setRecipeList] = useState<listType[]>(JSON.parse(localStorage.getItem('list') || ''))

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(recipeList))
         
       }, [recipeList])

    return (
        <ListContext.Provider value={{
            recipeList,
            setRecipeList
        }}>
            {children}
        </ListContext.Provider>
    )
}

