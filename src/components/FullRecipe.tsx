import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FullRecipe() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location', location)

    function goBack() {
        navigate(-1)
    }

    function upperCase() {
        const theWord = location.state.recipeName
        const newWord = []
        for(let i = 0; i < theWord.length; i++) {
            if(i === 0) newWord.push(theWord[0].toUpperCase())
            else newWord.push(theWord[i])
        }
        return newWord
    }

    return (
        <div className="fullRecipe">
            <div className="headerBar"><button type="button" onClick={goBack} className="closebtn">Close Recipe</button></div>
            <h2 className="center">{upperCase()}</h2>
        </div>
    )
}