import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import PropTypes from 'prop-types';

function Pagination({ totalBoks, paginate, params }) {
    const param = useParams();
    const pageNumbers = [];
    const [prev, setPrev] = useState(1)
    const [next, setNext] = useState(+param.pageNumber + 2 || +pageNumbers.length)

    for (let i = 1; i <= Math.ceil(totalBoks / 10); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        setPrev(param.pageNumber - 2 || 1)
        setNext(+param.pageNumber + 2 || +pageNumbers.length)
    }, [param,pageNumbers.length])

    return (
        <>
            <nav>
                <ul className='pagination'>
                    {
                        pageNumbers.map(number => {
                            if (number >= prev && number <= next) {
                                return (
                                    <li key={number} className='page-item'>
                                        <NavLink onClick={() => paginate(number)} to={`/search/${params.searchResult}/${number}`} className='page-link'>
                                            {number}
                                        </NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

Pagination.propTypes = {
    totalBoks: PropTypes.number,
    paginate: PropTypes.func,
    params: PropTypes.object

}

export default Pagination