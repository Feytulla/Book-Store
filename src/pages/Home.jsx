import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcBook } from "../store/allBook";
import BookList from "../components/BookList";

function Home() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.allBook.allBooks[0])
    const { status, error } = useSelector((state) => state.allBook)

    useEffect(() => {
        dispatch(fetcBook())
    }, [dispatch])
    
    return (
        <>
            <div className="container">
                <h2 className='text-center mt-5 mb-3'>Book Catalog</h2>
                <hr />
                <div className="row">
                    {status === 'loading' && <h2>Loading...</h2>}
                    {error && <h2>An error occured: {error}</h2>}
                    {
                        data && data.map((book, index) => {
                            return (
                                <BookList book={book} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home