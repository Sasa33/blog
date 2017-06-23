import React from 'react'
import './style.css'

const Table = ({ list, loadMore, nextPage }) => (
    <div className="Table">
        <div className="Table-header">
            <span>Title</span>
            <span>Author</span>
            <span>Num of Comments</span>
            <span>Points</span>
        </div>
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
        <button onClick={() => loadMore(nextPage)}>
            Load More
        </button>
    </div>
);

export default Table
