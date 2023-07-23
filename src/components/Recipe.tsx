import React from "react";
import { ingredientsType } from "../App";

type RecipeProps = {
    recipeName: string,
    ingredients: ingredientsType[],
    categories: string[]
}

export default function Recipe({recipeName, ingredients, categories}: RecipeProps) {

    const displayIngredients = ingredients.map(ingredient => {
        return (
            <div>
                <h3>{ingredient.ingredient}</h3>
                <h3>{ingredient.quantity + ' ' + ingredient.units}</h3>
            </div>
        )
    })

    const displayCategories = categories.map(c => {
        return (
            <h3>{c}</h3>
        )
    })
    console.log(categories)

    return (
        <div className="recipe">
            <h2 className="center">{recipeName}</h2>
            <h3 className="center">Ingredients</h3>
            {displayIngredients}
            {displayCategories}
        </div>
    )
}