import React from "react";
import { Link } from "react-router-dom";

function BookList({ book }) {
    return (
        <>
            <div className="col-sm-3 mb-3">
                <div className="book__item">
                    <Link to={`/book/${book.isbn13}`} className='book__item-link'>
                        <div className="book__img-container">
                            <img src={book.image} className='book__img' alt='img' />
                        </div>
                        <h5 className='book__title text-center'>{book.title}</h5>
                        <div className="book__footer text-right pr-3 pl-3">
                            <span className="book__footer-price mb-3">{book.price}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BookList