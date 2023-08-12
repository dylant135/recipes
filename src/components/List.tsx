import React, { useContext, useState } from "react";
import { recipeType } from "../App";
import Recipe from "./Recipe";
import { Route, Routes, useNavigate } from "react-router-dom";
import FullRecipe from "./FullRecipe";
import { recipeListContext } from "../context/RecipeListContext";
import SearchBar from "./filters/SearchBar";

export default function List() {

    const [search, setSearch] = useState('')
    const [searchFaze, setSearchFaze] = useState('start')
    const [searchType, setSearchType] = useState('')
    const [ph, setPh] = useState('')
    const { recipeList } = useContext(recipeListContext)

    const navigate = useNavigate()

    function openRecipe(recipeData: recipeType) {
        navigate('/list/fullRecipe', {state: recipeData})
    }

    function searchBy(word:string) {
        setSearchFaze('search')
        setPh(word)
        setSearchType(word)
    }

    function close() {
        setSearchFaze('start')
        setSearch('')
    }

    const filteredList = recipeList.filter(item => {
        let theItem:string | string[];
        if(searchType === 'Name') {
            theItem = item.recipeName
            return theItem.toLowerCase().includes(search.toLowerCase())
        } else if(searchType === 'Ingredient') {
            theItem = item.ingredients.map(x => x.ingredient)
            const filtered = theItem.filter(x => x.toLowerCase().includes(search.toLowerCase()))
            if(filtered.length > 0) return item
            return false
        } else if(searchType === 'Category') {
            theItem = item.category
            const filtered = theItem.filter(x => x.toLowerCase().includes(search.toLowerCase()))
            if(filtered.length > 0) return item
            else return false
        } else {
            return {}
        }

    })

    const displayList = filteredList.map(r => {
        return (
            <Recipe
                recipeData={r}
                openRecipe={openRecipe}
            />
        )
    })

    return (
        <div>
            <h1 className="center">Recipes List</h1>
            {searchFaze === 'start' && <div className="container center">
                <button type='button' className="searchbtns" onClick={() => setSearchFaze('select')}>Search By</button>
            </div>}

            {searchFaze === 'select' && <div className="searchByContainer">
                <button type='button' className="searchbtns" onClick={() => searchBy('Name')}>Search By Name</button>

                <button type='button' className="searchbtns" onClick={() => searchBy('Ingredient')}>Search By Ingredient</button>

                <button type='button' className="searchbtns" onClick={() => searchBy('Category')}>Filter By Category</button>
            </div>}

            {searchFaze === 'search' && <div className="container center">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    ph={ph}
                />
                <button type="button" className="searchbtns" onClick={close}>Close</button>
            </div>}

            <Routes><Route path="/fullRecipe" element={<FullRecipe />}></Route></Routes>
            <div className="listContainer">
                {displayList}
            </div>
        </div>
    )
}