import React, { createContext, useState } from "react";

export const CategoryContext = createContext({})

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