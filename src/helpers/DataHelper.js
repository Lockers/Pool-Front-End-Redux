import { useEffect } from 'react';
import { getResults } from '../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';


export const DataHelper = () => {

    const results = useSelector(state => state.results)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getResults())
    }, [dispatch])

    return (
        results
    )
}