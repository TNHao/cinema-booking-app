import React from 'react'
import PropTypes from 'prop-types' 
import './Pagination.scss'

Pagination.prototype = {
    pagination : PropTypes.object.isRequired,
    onPageChange : PropTypes.func
}

Pagination.defaultProps = {
    onPageChange : null,
}

export default function Pagination(props) {

    const { pagination, onPageChange } = props

    const { page, pageSize, total } = pagination

    const totalPages = Math.ceil(total / pageSize)

    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    
    return (
        <div className="pagination">
            <button className={`pagination__prev ${page === 1 ? `cursor-not-allowed` : ''}`} disabled={ page <= 1 } onClick={ () => handlePageChange(page - 1)}> Prev </button>
            <span className="my-auto"> Page {page}/{totalPages ? totalPages : '...'}</span>
            <button className={`pagination__next ${page === totalPages ? `cursor-not-allowed` : ''} `} disabled={ page >= totalPages } onClick={ () => handlePageChange(page + 1)}> Next </button>
        </div>
    )
}
