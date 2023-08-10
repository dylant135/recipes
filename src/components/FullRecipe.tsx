import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ingredientsType } from "../App";

export default function FullRecipe() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location', location)

    function goBack() {
        navigate(-1)
    }

    function upperCase(word:string) {
        const newWord = []
        for(let i = 0; i < word.length; i++) {
            if(i === 0) newWord.push(word[0].toUpperCase())
            else newWord.push(word[i])
        }
        return newWord
    }

    const displayIngredients = location.state.ingredients.map((x: ingredientsType) => {
        return (
            <ul className="ingredientsList">
                <li className="center">{upperCase(x.ingredient)} {x.quantity}{x.units}</li>
            </ul>
        )
    })

    const displayDirections = location.state.directions.map((step:string, index: number) => {
        return (
            <ul className="ingredientsList">
                <li className="center"><strong>Step {index + 1}: </strong>{upperCase(step)}</li>
            </ul>
        )
    })

    const displayCategories = location.state.category.map((c:string) => {
        return <p className="categoryCard">{upperCase(c)}</p>
    })

    return (
        <div className="fullRecipe">
            <div className="headerBar"><button type="button" onClick={goBack} className="closebtn">Close Recipe</button></div>

            <h2 className="center" style={{fontSize: '2em', fontWeight: 'bold'}}>{upperCase(location.state.recipeName)}</h2>

            <div className="categoriesContainer">{displayCategories}</div>

            <div className="container">
                <h3 className="center">Ingredients</h3>
                <hr style={{backgroundColor: 'black', margin: '7px 0'}}></hr>
                <div className="ingredientsContainer">{displayIngredients}</div>
            </div>

            <div className="container">
                <h3 className="center">Directions</h3>
                <hr style={{backgroundColor: 'black', margin: '7px 0'}}></hr>
                <div className="ingredientsContainer">{displayDirections}</div>
            </div>
        </div>
    )
}