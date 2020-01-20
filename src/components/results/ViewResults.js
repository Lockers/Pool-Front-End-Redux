import React, {useState, useEffect} from 'react';
import { getResults } from '../../store/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';
import { Pagination } from '../display/Pagination';

export const ViewResults = () => {

    const results = useSelector(state => state.results)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage] = useState(50)
    
   
    useEffect(() => {
        dispatch(getResults())
    }, [dispatch])

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    if (!results) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h1>Previous Results</h1>
            <ResultsList results={currentResults} />
            <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} paginate={paginate} />
        </div>
    )
}

