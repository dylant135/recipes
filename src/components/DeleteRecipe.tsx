import React, { useContext } from "react";
import { recipeListContext } from "../context/RecipeListContext";

type deleteProps = {
    recipeName: string
}

export default function DeleteRecipe({recipeName}: deleteProps) {
    const { setRecipeList, recipeList } = useContext(recipeListContext)

    function handleDelete(key:string) {
        const item = recipeList.filter(recipe => recipe.recipeName === key)
        if(item.length !== 1) {
            console.log(item, 'wkhak')
            return
        } 
        setRecipeList(prevState => {
            return [
                ...prevState.filter(recipe => recipe.recipeName !== key)
            ]
        })

    }

    return (
        <button className="deleteRecipebtn" type="button" onClick={() => handleDelete(recipeName)}>
            Delete Recipe
        </button>
    )
}