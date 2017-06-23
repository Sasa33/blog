import React from 'react'

const Table = ({ list }) => (
    <div>
        { list.map(item =>
            <div key={item.objectID}>
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
