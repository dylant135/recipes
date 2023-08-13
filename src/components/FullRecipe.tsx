import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ingredientsType } from "../App";
import DeleteRecipe from "./DeleteRecipe";

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
        return  <li className="ingredients">{upperCase(x.ingredient)} {x.quantity} {x.units}</li>
    })

    const displayDirections = location.state.directions.map((step:string, index: number) => {
        return <li className="directions"><strong>Step {index + 1}: </strong>{upperCase(step)}</li>
    })

    const displayCategories = location.state.category.map((c:string) => {
        return <p className="categoryCard">{upperCase(c)}</p>
    })

    const r:string = location.state.recipeName

    return (
        <div className="fullRecipe">
            <div className="headerBar"><button type="button" onClick={goBack} className="closebtn">Close Recipe</button></div>

            <h2 className="title" style={{fontSize: '2.5em', fontWeight: 'bold'}}>{upperCase(location.state.recipeName)}</h2>

            <div className="categoriesContainer">{displayCategories}</div>

            <div className="container">
                <h3 className="center top-margin largeText">Ingredients</h3>
                <hr style={{backgroundColor: 'black', margin: '7px 0'}}></hr>
                <ul className="ingredientsContainer">
                    {displayIngredients}
                </ul>
            </div>

            <div className="container">
                <h3 className="center top-margin largeText">Directions</h3>
                <hr style={{backgroundColor: 'black', margin: '7px 0'}}></hr>
                <ul className="ingredientsContainer">
                    {displayDirections}
                </ul>
            </div>

            <div className="container center">
                <DeleteRecipe recipeName={r} />
            </div>
        </div>
    )
}