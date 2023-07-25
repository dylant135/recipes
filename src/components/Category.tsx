import React from "react";

type CategoryProps = {
    name: string,
    handleCategoryClick: (c: string) => void
}

export default function Category({name, handleCategoryClick} : CategoryProps) {

    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
                type="checkbox"
                name={name}
                onClick={() => handleCategoryClick(name)}
            />
        </div>
    )
}