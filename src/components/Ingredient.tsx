import React from "react";

type IngredientProps = {
    ingredientName: string,
    quantity: number,
    index: number,
    edit: (index: number) => void
}

export default function Ingredient({ingredientName, quantity, index, edit}: IngredientProps) {
    return (
        <div className="ingredient">
            <h4>{ingredientName}</h4>
            <h5>{quantity}</h5>
            <button type="button" className="editbtn" onClick={() => edit(index)}>Edit</button>
        </div>
    )
}