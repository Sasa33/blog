import React from 'react'

const cartoon = ({index, cartoon}) => (
    <li key={index}>
        <div className="Cartoon-container">
            <div className="Cartoon-info">
                <img src={cartoon.imgURL} alt={cartoon.title} />
                <div>
                    <p>{cartoon.title}</p>
                    <p>{cartoon.cnTitle} &nbsp; {cartoon.jpTitle}</p>
                </div>
            </div>
            <time>{cartoon.year}</time>
        </div>
    </li>
);

export default cartoon