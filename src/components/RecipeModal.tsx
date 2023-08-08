import React from "react";
import { recipeType } from "../App";

type modalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    reipeData: recipeType
}

export default function RecipeModal({setOpenModal, reipeData}: modalProps) {
    return (
        <div className="recipeModal">

        </div>
    )
}