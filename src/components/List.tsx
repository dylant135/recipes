import React from "react";
import { recipeType } from "../App";
import Recipe from "./Recipe";

type ListProps = {
    recipeList: recipeType[]
}

export default function List({recipeList}:ListProps) {
    const displayList = recipeList.map(r => {
        return (
            <Recipe
                recipeName={r.recipeName}
                ingredients={r.ingredients}
                categories={r.category}
            />
        )
    })
    return (
        <div>
            <h1 className="center">List</h1>
            {displayList}
        </div>
    )
}