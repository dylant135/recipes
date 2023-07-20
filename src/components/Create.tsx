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
            quantity: 0,
            units: ''
        }],
        directions: [],
        category: []
    })

    const [ingredientIndex, setIngredientIndex] = useState(0)
    const [newCategory, setNewCategory] = useState(false)

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
            ingredients: [
                {
                    ingredient: '',
                    quantity: 0,
                    units: ''
                }
            ],
            directions: [],
            category: []
        })
        setIngredientIndex(0)
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
            quantity: 0,
            units: ''
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

    function addCategory() {
        
    }

    const displayIngredients = formData.ingredients.map((ingredient, index) => {
        return (
            <Ingredient
                ingredientName={ingredient.ingredient}
                quantity={ingredient.quantity}
                units={ingredient.units}
                edit={editIngredient}
                index={index}
                ingredientIndex={ingredientIndex}
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

                 <div className="checkContainer">
                    <label htmlFor="option1">Option 1</label>
                    <input
                        type="checkbox"
                        name="option1"
                    />

                    {!newCategory && <button className="moreCategories" type="button" onClick={() => setNewCategory(true)}>Add Another Category</button>}
                    {newCategory && <div>
                        <input
                            type="text"
                            name='category'
                            value={formData.category[formData.category.length - 1]}
                            onChange={addCategory}
                            placeholder="Category Name"
                        />
                        <button type="button" onClick={() => setNewCategory(false)}>Add Category</button>
                        </div>}
                 </div>
                 
                <fieldset>
                    <legend>Ingredients</legend>
                    <div className="ingredientContainer">
                        <div>
                            <label htmlFor='ingredient'>Ingredient Name: </label>
                            <input
                                type="text"
                                value={formData.ingredients[ingredientIndex].ingredient}
                                onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                                name='ingredient'
                                placeholder="Ingredient Name"
                            />
                        </div>
                        <div>
                            <label htmlFor='quantity'>Quantity: </label>
                            <input
                                type="number"
                                value={formData.ingredients[ingredientIndex].quantity}
                                onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                                name='quantity'
                                placeholder="Quantity"
                                style={{width: '50px'}}
                            />
                            <input
                                type="text"
                                value={formData.ingredients[ingredientIndex].units}
                                onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                                name='units'
                                placeholder="Units"
                                style={{width: '75px'}}
                            />
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <button type="button" className="addMore" onClick={moreIngredients}>Add another Ingredient</button>
                        </div>
                    </div>

                    <div className="ingredient">
                        <h5>Ingredient</h5>
                        <h5>Quantity</h5>
                        <h5>Edit</h5>
                    </div>
                    {displayIngredients}
                </fieldset>

                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}