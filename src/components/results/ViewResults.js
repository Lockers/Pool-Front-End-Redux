import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';
import { Pagination } from '../display/Pagination';
import { Loader } from '../display/Loader';

export const ViewResults = () => {

    const results = useSelector(state => state.results)
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage] = useState(50)
    
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    if (!results) {
        return <Loader />
    }

    return (
        <div>
            <h1>Previous Results</h1>
            {currentResults.map(result => <ResultsList result={result} key={result._id} />)}
            <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} paginate={paginate} />
        </div>
    )
}

