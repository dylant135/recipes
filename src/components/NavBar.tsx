import React from "react";
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <h1>Recipe DB</h1>
            <ul className="navContainer">
                <NavLink to='list' ><li className="navItem">Recipe List</li></NavLink>
            
                <NavLink to='create'><li className="navItem">Create Recipe</li></NavLink>
            </ul>
        </nav>
    )
}