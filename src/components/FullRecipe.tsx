import React from "react";
import { useLocation } from "react-router-dom";

export default function FullRecipe() {
    const location = useLocation()
    console.log('location', location)
    return (
        <div className="fullRecipe">
            <h2 className="center">{location.state.recipeName}you work</h2>
        </div>
    )
}