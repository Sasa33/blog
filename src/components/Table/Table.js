import React from 'react'
import './style.css'

const Table = ({ list, loadMore, nextPage }) => (
    <div>
      <table className="Search-result">
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Num of Comments</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        { list.map(item =>
          <tr key={item.objectID}>
            <td>
              <a href={item.url}>{item.title}</a>
            </td>
            <td>{item.author}</td>
            <td>{item.num_comments}</td>
            <td>{item.points}</td>
          </tr>
        )}
        </tbody>
      </table>
      <button onClick={() => loadMore(nextPage)}>
        Load More
      </button>
    </div>
);

export default Table
