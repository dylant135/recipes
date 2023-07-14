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
        switch(name) {
            case 'recipeName':
                setFormData(prevState => {
                    return {
                        ...prevState,
                        [name]: value
                    }
                })
                break;
            case 'ingredients':
                //const {datatype} = e.target
                console.log([name[ingredientIndex]])
                setFormData(prevState => {
                    return {
                        ...prevState,
                        [name[ingredientIndex]]: value
                    }
                })
        }
        
    }

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
                        name="ingredients"
                        datatype="ingredient"
                    />
                    <input
                        type="number"
                        value={formData.ingredients[ingredientIndex].quantity}
                        onChange={handleChange}
                        name="ingredients"
                        datatype="quantity"
                    />
                </fieldset>

                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}