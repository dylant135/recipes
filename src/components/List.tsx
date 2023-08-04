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
                recipeData={r}
            />
        )
    })
    return (
        <div>
            <h1 className="center">Recipes List</h1>
            {displayList}
        </div>
    )
}