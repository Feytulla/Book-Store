import React from "react";
import { Link } from "react-router-dom";

function SearchResultList({ books }) {

    return (
        <>
            <ul className='list-group mb-4'>
                {books.map((book, i) => (
                    <li key={i} className='list-group-item'>
                        <Link to={`/book/${book.isbn13}`} className='d-flex align-items-center'>
                            <div style={{ width: 100 }}>
                                <img src={book.image} alt="" />
                            </div>
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SearchResultList