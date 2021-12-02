import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import SearchResultList from "../components/SearchResultList"
import Pagination from "../components/Pagination";

function SearchResultPage() {
    const params = useParams()
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageOty, setPageQty] = useState(0)
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const axiosPosts = async () => {
            const res = await axios.get(`https://api.itbook.store/1.0/search/${params.searchResult}/${currentPage}`);
            const sum = Math.ceil(res.data.total / res.data.books.length)
            setBooks(res.data.books)
            setPageQty(Number(sum))
        };
        axiosPosts()
    }, [currentPage, params.searchResult]);

    return (
        <>
            <div className="container">
                {
                    books && <SearchResultList books={books} />
                }
                {
                    books && <Pagination totalBoks={pageOty} paginate={paginate} params={params} />
                }
            </div>
        </>
    )
}

export default SearchResultPage