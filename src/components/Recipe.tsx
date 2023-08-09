import React from "react";
import { recipeType } from "../App";

type RecipeProps = {
    recipeData: recipeType,
    openRecipe: (recipeData: recipeType) => void
}

export default function Recipe({recipeData, openRecipe}: RecipeProps) {
    function upperCase() {
        const theWord = recipeData.recipeName
        const newWord = []
        for(let i = 0; i < theWord.length; i++) {
            if(i === 0) newWord.push(theWord[0].toUpperCase())
            else newWord.push(theWord[i])
        }
        return newWord
    }

    return (
        <div className="recipe" onClick={() => openRecipe(recipeData)}>
            <h2 className="center">{upperCase()}</h2>
        </div>
    )
}