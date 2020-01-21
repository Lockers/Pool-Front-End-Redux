import React from 'react';
import { useSelector } from 'react-redux';
import ResultsList from '../display/ResultsList';

export const ViewChallenges = () => {

    const challenges = useSelector(state => state.challenges)
    
    return (
        <div>
            <h1>Upcoming Challenges</h1>
            {challenges.map(challenge => <ResultsList result={challenge} key={challenge._id}/>)}
         </div >
    )
}