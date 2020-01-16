import React, { useEffect } from 'react';
import { getChallenges } from '../../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';
import uuid from 'uuid';

export const ViewChallenges = () => {

    const challenges = useSelector(state => state.challenges)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getChallenges())
    }, [dispatch])

    return (
        <div>
            <h1>Upcoming Challenges</h1>
            {challenges.map(result => {
                return <ResultsList result={result} key={uuid()} />
            }
            )}
        </div >
    )
}