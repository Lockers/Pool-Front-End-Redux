import React from 'react';
import Button from '@material-ui/core/Button';

export const Pagination = ({ resultsPerPage, totalResults, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++)
        pageNumbers.push(i)
        return (
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={(e) => paginate(number)} >
                            {number}
                        </Button>    
                    ))}
                </ul>

            </nav>
        )
}
