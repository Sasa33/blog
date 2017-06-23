import React from 'react'

const Search = ({ value, onChange, onSubmit, children }) => (
    <form onSubmit={onSubmit}>
        <input value={value} onChange={(e) => onChange(e.target.value)} />
        <button type="submit">{children}</button>
    </form>
);

export default Search
