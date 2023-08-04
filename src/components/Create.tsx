import React, { useContext, useEffect, useState } from "react";
import { recipeType } from "../App";
import Ingredient from "./Ingredient";
import Category from "./Category";
import { CategoryContext } from "../context/CategoryContext";

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

    console.log(formData)
    //categories
    const { categories, setCategories } = useContext(CategoryContext)
    const [categoryInput, setCategoryInput] = useState('')
    const [newCategory, setNewCategory] = useState(false)
    const [isChecked, setIsChecked] = useState(categories.map(c => {
        return {
            name: c,
            checked: false
        }
    }))

    const [steps, setSteps] = useState(1)

    //update isChecked when new category is added
    useEffect(() => {
        const categoryIndex = categories.length - 1
        if(categoryIndex < 0) return
        const c: any = [...categories]
        setIsChecked(prevState => {
            return [
                ...prevState,
                {
                    name: c[categoryIndex],
                    checked: false
                }
            ]
        })
    }, [categories])

    const [ingredientIndex, setIngredientIndex] = useState(0)
    

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const filtered = isChecked.filter(item => item.checked)
        const c = filtered.map(category => {
            console.log(category.name, 'sjifaoidjgio')
            return category.name
        })
        const data = formData
        data.category = c
        setFormData(data)
        console.log(formData, 'correct data?')
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

    function handleDirectionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = e.target
        const directions = [...formData.directions]
        directions[steps - 1] = value
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: directions
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

    function createCategory() {
        setNewCategory(true)
        const category = [...formData.category]
        category[formData.category.length] = ''
        setFormData(prevState => {
            return {
                ...prevState,
                category
            }
        })
    }

    function categoryChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        /*
        const category: any[] = [...formData.category]
        category[formData.category.length - 1] = value
        setFormData(prevState => {
            return {
                ...prevState,
                category
            }
        })*/
        setCategoryInput(value)
    }

    function submitCategory() {
        setNewCategory(false)
        setCategories(prevState => {
            return [
                ...prevState,
                categoryInput
            ]
        })
        setCategoryInput('')
    }

    function handleCategoryClick(c:string) {
        //const theCategory = isChecked.find(category => category.name === c)
        const index = isChecked.findIndex(category => category.name === c)
        const arr = [...isChecked]
        arr[index] = {
            name: arr[index].name,
            checked: !arr[index].checked
        }
        setIsChecked(arr)        
    }

    function addStep() {
        const dir = [...formData.directions]
        dir[steps] = ''
        setFormData(prevState => {
            return {
                ...prevState,
                directions: dir
            }
        })
        setSteps(prevState => prevState + 1)
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

    const displayCategories = categories.map(c => {
        return (
            <Category
                name={c}
                handleCategoryClick={() => handleCategoryClick(c)}
            />
        )
    })

    return (
        <div>
            <h1 className="center">Create Recipe</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.recipeName}
                    onChange={handleChange}
                    name='recipeName'
                    placeholder="Recipe Name"
                    className="recipeNameInput"
                    required
                 />

                 <div className="checkContainer">
                    <h3 className="center">Categories</h3>
                    
                    {displayCategories}

                    {!newCategory && <button className="moreCategories" type="button" onClick={createCategory}>Add Category</button>}
                    {newCategory && <div>
                        <input
                            type="text"
                            name='category'
                            value={categoryInput}
                            onChange={categoryChange}
                            placeholder="Category Name"
                        />
                        <button className="moreCategories" type="button" onClick={submitCategory}>Add Category</button>
                        </div>}
                 </div>
                 
                <fieldset>
                    <legend style={{fontSize: '1.5em'}}>Ingredients</legend>
                    <div className="ingredientContainer">
                        <div>
                            <label htmlFor='ingredient'>Ingredient Name: </label>
                            <input
                                type="text"
                                value={formData.ingredients[ingredientIndex].ingredient}
                                onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                                name='ingredient'
                                placeholder="Ingredient Name"
                                required
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
                                required
                            />
                            <input
                                type="text"
                                value={formData.ingredients[ingredientIndex].units}
                                onChange={(e) => handleIngredientChange(e, ingredientIndex)}
                                name='units'
                                placeholder="Units"
                                style={{width: '75px'}}
                                required
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

                <fieldset className="directionsContainer">
                    <legend style={{fontSize: '1.5em'}}>Directions</legend>

                    <h4 className="center">Step #{steps}</h4>

                    <textarea 
                        value={formData.directions[steps - 1]}
                        name="directions"
                        placeholder="direction..."
                        onChange={handleDirectionChange}
                    >

                    </textarea>

                    <button type="button" className="anotherStep" onClick={addStep}>Another Step</button>
                </fieldset>

                 <button className="submit">Submit Recipe</button>
            </form>
        </div>
    )
}