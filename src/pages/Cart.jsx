import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartList from "../components/CartList";
import { addCartBook, clearCartBook } from "../store/cartBooks";

function Cart() {
    const dispatch = useDispatch()
    const books = useSelector(state => state.cartBooks.allBooks)
    const [local] = useState(JSON.parse(localStorage.getItem('books')))
    const [totalPrice, setTotalPrice] = useState('0');

    useEffect(() => {
        if (local) {
            dispatch(clearCartBook())
            local.forEach(book => {

                fetch(`https://api.itbook.store/1.0/books/${book.id}`)
                    .then(response => response.json())
                    .then(books => {
                        let res = books
                        res.count = book.count
                        dispatch(addCartBook(res))
                    })
            })
        }
    }, [local,dispatch])

    useEffect(() => {
        setTotalPrice(0)
        let money = 0
        books.forEach(book => {
            const count = book.count;
            const price = Number(book.price.replace('$', ''));
            const total = price * count;
            return money = money + total
        })
        setTotalPrice(money)
    }, [books])

    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-sm-9">
                        {
                            books && books.map((book, index) => (
                                <CartList book={book} index={index} key={index} />
                            ))
                        }
                    </div>
                    <div className="col-sm-3">
                        <div className=" col-sm mt-5 pt-3 pb-3 cart__total">
                            <span>Total price: {' $' + Number(totalPrice).toFixed(2)}</span>
                            <button className="btn btn-success mt-3"> Sifarişi tamamla </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart