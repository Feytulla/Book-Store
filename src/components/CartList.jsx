import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook, addCount } from "../store/cartBooks";
import PropTypes from 'prop-types';

function CartList({ book, index }) {
    const [bookValue, setBookValue] = useState(book.count ? book.count : 0)
    const [bookIndex] = useState(index)
    const dispatch = useDispatch()
    const local = JSON.parse(localStorage.getItem('books'));
    const isbn = book.isbn13

    useEffect(() => {
        setBookValue(local[index].count)

    },[])

    useEffect(() => {
        dispatch(addCount({bookValue,isbn}))
        
        if (local) {
            const newObj = {
                id:isbn,
                count: bookValue,
                price: book.price
            }
            local[bookIndex] = newObj
            localStorage.setItem('books', JSON.stringify(local))
            setBookValue(local[index].count)
        }
        
    }, [bookValue])
    function deleteBook() {
        dispatch(removeBook(index))
        local.splice(index, 1)
        localStorage.setItem('books', JSON.stringify(local))
    }
    return (
        <>
            <div className="col-sm pt-3 pb-3 d-flex align-items-center justify-content-between">
                <div className="cart__img-container">
                    <img src={book.image} alt="" />
                </div>
                <div className="cart__title">
                    {book.title}
                </div>
                <div className="cart__price">
                    {
                        '$' + (+book.price.replace('$', '') * bookValue).toFixed(2)
                    }
                </div>
                <div className="cart__count">
                    <input type="number" className="form-control" min='1' value={book.count} onChange={event => setBookValue(event.target.value)} />
                </div>
                <div className="cart__remove">
                    <button className='btn btn-danger' onClick={() => deleteBook()}>&times;</button>
                </div>
            </div>
        </>
    )
}

CartList.propTypes = {
    book: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default CartList