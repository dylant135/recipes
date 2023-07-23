import React, { createContext, useState } from "react";

type contextType = {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const init = {
    categories: [],
    setCategories: () => {}
} as contextType

export const CategoryContext = createContext(init)

type providerProps = {
    children: React.ReactNode
}
export default function CategoryProvider({children}: providerProps) {
    const [categories, setCategories] = useState<string[]>([])
    return (
        <CategoryContext.Provider value={{
            categories,
            setCategories
        }}>
            {children}
        </CategoryContext.Provider>
    )
}