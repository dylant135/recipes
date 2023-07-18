import React, { useState } from "react";
import { recipeType } from "../App";

type CreateProps = {
    setRecipeList: React.Dispatch<React.SetStateAction<recipeType[]>>
}

export default function Create({setRecipeList}:CreateProps) {
    const [formData, setFormData] = useState<recipeType>({
        recipeName: '',
        ingredients: [{
            ingredient: '',
            quantity: 0
        }],
        directions: []
    })

    const [ingredientIndex, setIngredientIndex] = useState(0)

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        const {name, value } = e.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
              
    }
    console.log(formData)

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setRecipeList(prevState => {
            return [
                ...prevState,
                formData
            ]
        })
        setFormData({
            recipeName: '',
            ingredients: [],
            directions: []
        })
    }

    function handleIngredientChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const ingredient = [formData.ingredients[index]]
    }

    return (
        <div>
            <h1 className="center">Create</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.recipeName}
                    onChange={handleChange}
                    name='recipeName'
                 />
                <fieldset>
                    <legend>Ingredient</legend>
                    <input
                        type="text"
                        value={formData.ingredients[ingredientIndex].ingredient}
                        onChange={(ingredientIndex) => handleIngredientChange}
                        name='ingredient'
                    />
                    <input
                        type="number"
                        value={formData.ingredients[ingredientIndex].quantity}
                        onChange={(ingredientIndex) => handleIngredientChange}
                        name='quantity'
                    />
                </fieldset>

                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}