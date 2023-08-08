import React, { useState } from "react";
import { recipeType } from "../App";
import Recipe from "./Recipe";
import { Route, Routes, useNavigate } from "react-router-dom";
import FullRecipe from "./FullRecipe";

type ListProps = {
    recipeList: recipeType[]
}

export default function List({recipeList}:ListProps) {

    const navigate = useNavigate()

    function openRecipe(recipeData: recipeType) {
        navigate('/list/fullRecipe', {state: recipeData})
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
            <Routes><Route path="/fullRecipe" element={<FullRecipe />}></Route></Routes>
            <div className="listContainer">
                {displayList}
            </div>
        </div>
    )
}