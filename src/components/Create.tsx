import React, { useState } from "react";
import { recipeType } from "../App";
import Ingredient from "./Ingredient";

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

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        const {name, value } = e.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
              
    }

    function handleIngredientChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const {name, value} = e.target
        const ingredients: any[] = [...formData.ingredients]
        ingredients[index] = {
            ...ingredients[index],
            [name]: value
        }
        setFormData(prevState => {
            return {
                ...prevState,
                ingredients
            }
        })
    }

    function moreIngredients() {
        const ingredients = [...formData.ingredients]
        ingredients[ingredientIndex + 1] = {
            ingredient: '',
            quantity: 0
        }
        setFormData(prevState => {
            return {
                ...prevState,
                ingredients
            }
        })
        const i = formData.ingredients.length
        setIngredientIndex(i)
        
    }

    function editIngredient(index: number) {
        setIngredientIndex(index)
    }

    const displayIngredients = formData.ingredients.map((ingredient, index) => {
        return (
            <Ingredient
                ingredientName={ingredient.ingredient}
                quantity={ingredient.quantity}
                edit={editIngredient}
                index={index}
            />
        )
    })

    return (
        <div>
            <h1 className="center">Create</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.recipeName}
                    onChange={handleChange}
                    name='recipeName'
                    placeholder="Recipe Name"
                 />
                <fieldset>
                    <legend>Ingredient</legend>
                    <input
                        type="text"
                        value={formData.ingredients[ingredientIndex].ingredient}
                        onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                        name='ingredient'
                        placeholder="Ingredient Name"
                    />
                    <input
                        type="number"
                        value={formData.ingredients[ingredientIndex].quantity}
                        onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                        name='quantity'
                        placeholder="Quantity"
                    />
                    <button type="button" onClick={moreIngredients}>Add another Ingredient</button>
                    {displayIngredients}
                </fieldset>

                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}