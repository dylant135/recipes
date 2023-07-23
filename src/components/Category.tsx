import React from "react";

type CategoryProps = {
    name: string,
    isChecked: {
        name: string;
        checked: boolean;
    }[],
    setIsChecked: React.Dispatch<React.SetStateAction<{
        name: string;
        checked: boolean;
    }[]>>
}

export default function Category({name, isChecked, setIsChecked} : CategoryProps) {

    function handleClick(name:string) {
        const found = isChecked.find(element => element.name === name)
        if(found === undefined) return
        const index = isChecked.indexOf(found)
        const arr = [...isChecked]
        arr[index] = {
            name,
            checked: !arr[index].checked
        }
        setIsChecked(arr)
    }

    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
                type="checkbox"
                name={name}
                onClick={() => handleClick(name)}
            />
        </div>
    )
}