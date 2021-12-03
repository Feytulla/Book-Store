import React from "react";
import PropTypes from 'prop-types';

function BookInfo({ book }) {
    return (
        <>
            <tr>
                <td>Title</td>
                <td>{book.title}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>{book.price}</td>
            </tr>
            <tr>
                <td>Rating</td>
                <td>{book.rating}</td>
            </tr>
            <tr>
                <td>Author</td>
                <td>{book.authors}</td>
            </tr>
            <tr>
                <td>Publisher</td>
                <td>{book.publisher}</td>
            </tr>
            <tr>
                <td>Published</td>
                <td>{book.year}</td>
            </tr>
            <tr>
                <td>Pages</td>
                <td>{book.pages}</td>
            </tr>
            <tr>
                <td>Language</td>
                <td>{book.language}</td>
            </tr>
            <tr>
                <td>ISBN-10</td>
                <td>{book.isbn10}</td>
            </tr>
            <tr>
                <td>ISBN-13</td>
                <td>{book.isbn13}</td>
            </tr>
        </>
    )
}

BookInfo.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookInfo