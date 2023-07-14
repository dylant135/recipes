import React from "react";
import { recipeType } from "../App";

type ListProps = {
    recipeList: recipeType[]
}

export default function List({recipeList}:ListProps) {
    const displayList = recipeList.map(r => {
        return (
            r.recipeName
        )
    })
    return (
        <div>
            <h1 className="center">List</h1>
            {displayList}
        </div>
    )
}