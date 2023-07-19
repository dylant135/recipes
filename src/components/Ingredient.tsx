import React from "react";

type IngredientProps = {
    ingredientName: string,
    quantity: number,
    units: string,
    index: number,
    ingredientIndex: number,
    edit: (index: number) => void
}

export default function Ingredient({ingredientName, quantity, units, index, ingredientIndex, edit}: IngredientProps) {
    console.log(ingredientIndex)
    return (
        <div className={index === ingredientIndex ? 'activeIngredient' : 'ingredient'}>
            <h4>{ingredientName}</h4>
            <h5>{quantity + ' ' + units}</h5>
            <button type="button" className="editbtn" onClick={() => edit(index)}>Edit</button>
        </div>
    )
}