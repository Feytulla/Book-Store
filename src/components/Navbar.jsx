import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchsearch } from "../store/searchBook";
import SearchList from "./SearchList";

function Navbar() {
    const dispatch = useDispatch()
    const books = useSelector(state => state.search.books[0])
    const [seacrh, setSeacrh] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef();
    const linkRef = useRef();
    useOnClickOutside(modalRef, () => setModalOpen(false));

    useEffect(() => {
        dispatch(fetchsearch(seacrh))
        setModalOpen(false)
    }, [seacrh, dispatch])

    useEffect(() => {
        if (books) {
            if (books.length >= 1) {
                setModalOpen(true)
            }
        }
    }, [books])

    function toggleModal(prop) {
        setModalOpen(prop)
    }

    function keyDown(e) {
        e.preventDefault()
        linkRef.current.click()
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div>
                        <Link className="navbar-brand" to="/">Books</Link>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0" onSubmit={keyDown}>
                            <input type="text" className="form-control navbar__input" placeholder="Axtarış..." value={seacrh} onChange={event => setSeacrh(event.target.value)} />
                            <div className="input-group-append">
                                <Link to={`/search/${seacrh}/1`} ref={linkRef} onClick={() => setModalOpen(false)} className="btn btn-info">Axtarış</Link>
                            </div>
                            {
                                isModalOpen &&
                                <div className='seacrh__books row' ref={modalRef}>
                                    {books.map((book, index) => {
                                        return (
                                            <SearchList book={book} key={index} toggleModal={toggleModal} />
                                        )
                                    })}
                                </div>
                            }
                        </form>
                    </div>
                    <div className="cart-container">
                        <Link to="/cart" className='btn btn-info'>Səbət</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {

                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

export default Navbar