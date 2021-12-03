import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function SearchList({ book, toggleModal }) {

    return (
        <>
            <div className="col-sm-12 pr-0 pl-0" >
                <Link to={`/book/${book.isbn13}`}  className='book-list d-flex align-items-center pt-2 pb-2' onClick={() => toggleModal(false)}>
                    <div className='book-list__img-contain' >
                        <img src={book.image} alt="" className='book-list__img' />
                    </div>
                    <span className="content">
                        {book.title}
                    </span>
                </Link>
            </div>
        </>
    )
}

SearchList.propTypes = {
    book: PropTypes.object.isRequired,
    toggleModal: PropTypes.func
}

export default SearchList