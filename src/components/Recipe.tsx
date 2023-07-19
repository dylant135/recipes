import React from "react";
import { ingredientsType } from "../App";

type RecipeProps = {
    recipeName: string,
    ingredients: ingredientsType[]
}

export default function Recipe({recipeName, ingredients}: RecipeProps) {
    const displayIngredients = ingredients.map(ingredient => {
        return (
            <div>
                <h3>{ingredient.ingredient}</h3>
                <h3>{ingredient.quantity + ' ' + ingredient.units}</h3>
            </div>
        )
    })
    return (
        <div className="recipe">
            <h2 className="center">{recipeName}</h2>
            <h3 className="center">Ingredients</h3>
            {displayIngredients}
        </div>
    )
}