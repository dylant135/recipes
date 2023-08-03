import React from "react";
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <h1>Recipe DataBase</h1>
            <ul className="navContainer">
                <NavLink to='list' className='navItem' ><li>Recipe List</li></NavLink>
            
                <NavLink to='create' className='navItem'><li>Create Recipe</li></NavLink>
            </ul>
        </nav>
    )
}