import React, { createContext, useState} from "react";
import { listType } from "../App";


const defaultValue = {
    //recipeList: []
}

export const ListContext = createContext(defaultValue)

export default function ListProvider() {
    const [recipeList, setRecipeList] = useState([])
    return (
        <ListContext.Provider value={{
            recipeList,
            setRecipeList
        }}>

        </ListContext.Provider>
    )
}

