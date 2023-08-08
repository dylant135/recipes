import React, { useState } from "react";
import { recipeType } from "../App";
import Recipe from "./Recipe";
import RecipeModal from "./RecipeModal";

type ListProps = {
    recipeList: recipeType[]
}

export default function List({recipeList}:ListProps) {

    const [openModal, setOpenModal] = useState(false)

    function openRecipe(recipeData: recipeType) {
        setOpenModal(true)
        return recipeData
    }

    const displayList = recipeList.map(r => {
        return (
            <Recipe
                recipeData={r}
                openRecipe={openRecipe}
            />
        )
    })
    return (
        <div>
            <h1 className="center">Recipes List</h1>
            {openModal && <RecipeModal setOpenModal={setOpenModal} recipeData={openModal()} />}
            <div className="listContainer">
                {displayList}
            </div>
        </div>
    )
}