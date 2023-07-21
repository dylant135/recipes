import React from "react";

type CategoryProps = {
    name: string
}

export default function Category({name} : CategoryProps) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
                type="checkbox"
                name={name}
            />
        </div>
    )
}