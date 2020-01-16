import React, {useEffect} from 'react';
import { getResults } from '../../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';
import uuid from 'uuid';

export const ViewResults = () => {

    const results = useSelector(state => state.results)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getResults())
    }, [dispatch])
    
    return (
        <div>
            <h1>Previous Results</h1>
            {results.map(result => {
                return <ResultsList result={result} key={uuid()} />}
                )}
    </div >
    )
}

