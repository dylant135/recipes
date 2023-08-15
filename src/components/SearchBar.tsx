import React from "react";

type proptype = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    ph: string
}

export default function SearchBar({search, setSearch, ph}: proptype) {
    return (
        <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={ph}
        />
    )
}