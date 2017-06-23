import React from 'react'
import './style.css'

const Search = ({ value, onChange, onSubmit, children }) => (
    <form className="Search" onSubmit={onSubmit}>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        <button type="submit">{children}</button>
    </form>
);

export default Search
