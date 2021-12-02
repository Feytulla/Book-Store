import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetbook } from "../store/book";
import BookInfo from "../components/BookInfo";

function BookPage() {
    const params = useParams();
    const dispatch = useDispatch()
    const book = useSelector(state => state.book.book[0])
    const [count, setCount] = useState('1' ? '1' : 0)
    const [addCart, setAddCart] = useState([])

    useEffect(() => {
        dispatch(fetbook(params.isbn13))
        setCount('1')
    }, [params, dispatch])

    useEffect(() => {
        if (localStorage.getItem('books')) {
            setAddCart(
                addCart.concat(JSON.parse(localStorage.getItem('books')))
            )
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(addCart))
    }, [addCart])

    function handlerSubmit(id, price) {
        setAddCart(addCart.forEach((cart, index) => {
            if (cart.id === id) {
                console.log('daa')
                return cart.count = count;
            }
        }))

        addCart.forEach((cart, index) => {
            if (cart.id === id) {
                setAddCart(
                    addCart.splice(index, 1)
                )
            }
        })

        setAddCart(
            addCart.concat([{
                id,
                count: count,
                price,
            }])
        )
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="book__img-container text-center">
                            {
                                book && <img src={book.image} alt="" />
                            }
                        </div>
                        <form>
                            <div className="input-group mt-5">
                                <input type="number" className="form-control" min='1' value={count} onChange={event => setCount(event.target.value)} />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="button" onClick={() => handlerSubmit(book.isbn13, book.price)}>Əlavə et</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-8">
                        <table className="table table-striped table-sm">
                            <tbody>
                                {
                                    book && <BookInfo book={book} />
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookPage