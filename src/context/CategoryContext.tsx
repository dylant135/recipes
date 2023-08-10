import React, { createContext, useState } from "react";

type contextType = {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

//const initCategories:string[] = JSON.parse(localStorage.getItem('categories') || '')

const init = {
    categories: [],
    setCategories: () => {}
} as contextType

export const CategoryContext = createContext(init)

type providerProps = {
    children: React.ReactNode
}
export default function CategoryProvider({children}: providerProps) {
    const [categories, setCategories] = useState<string[]>(JSON.parse(localStorage.getItem('categories') || '[]'))
    return (
        <CategoryContext.Provider value={{
            categories,
            setCategories
        }}>
            {children}
        </CategoryContext.Provider>
    )
}