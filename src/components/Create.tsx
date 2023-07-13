import React, { useState } from "react";

export default function Create() {
    const [formData, setFormData] = useState({
        recipeName: '',
        ingredients: [],
        directions: []
    })

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div>
            <h1 className="center">Create</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.recipeName}
                    onChange={handleChange}
                    name='recipeName'
                 />
                 <button className="submit">Submit</button>
            </form>
        </div>
    )
}