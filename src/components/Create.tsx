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

        if(name.split('.')[0] === 'ingredients') {
            const myArr = name.split('.')
            setFormData(prevState => {
                return {
                    ...prevState,
                    [myArr[0][ingredientIndex].myArr[1]] : value
                }
            })
        }

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
                        onChange={handleChange}
                        name='ingredients.ingredient'
                    />
                    <input
                        type="number"
                        value={formData.ingredients[ingredientIndex].quantity}
                        onChange={handleChange}
                        name='ingredients.quantity'
                    />
                </fieldset>

                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}