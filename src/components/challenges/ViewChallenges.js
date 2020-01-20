import React, { useEffect } from 'react';
import { getChallenges } from '../../store/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';

export const ViewChallenges = () => {

    const challenges = useSelector(state => state.challenges)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getChallenges())
    }, [dispatch])

    return (
        <div>
            <h1>Upcoming Challenges</h1>
            <ResultsList results={challenges} />
        </div >
    )
}