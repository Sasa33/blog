import React from 'react'
import './style.css'

const Table = ({ list }) => (
    <div className="Table">
        { list.map(item =>
            <div key={item.objectID} className="Table-item">
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        )}
    </div>
);

export default Table
