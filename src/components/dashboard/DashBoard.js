import React from 'react';
import { useSelector } from 'react-redux';
import { usePlayerChallenges } from '../../helpers/PlayerChallenges';
import { useGetStats } from '../../helpers/GetStats';
import { venues, rulesets } from '../../helpers/Data';
import PieChart from '../display/DonutChart';
import { Container } from '@material-ui/core';

export const DashBoard = () => {

    const results = useSelector(state => state.results)
    const challenges = usePlayerChallenges(results)
    const stats = useGetStats(results)
    
    return (
        <Container>
            <h1>Dashboard</h1>
                <h3>Venues Used</h3>
                <PieChart stats={stats.getStats(venues)} />

                <h3>Rulesets Played</h3>
                <PieChart stats={stats.getStats(rulesets)} />
            
                <h3>Total Games Played: {results.length} </h3>
                <PieChart stats={stats.getChallengesWon(results)} />
            
            <h4>Total Prize Money Played for: £{challenges.amountPlayedFor}</h4>
            <h4>Average Pot: £{Math.round(challenges.amountPlayedFor / results.length)}</h4>
            <h4>Most Challenged Player: {challenges.mostChallengedPlayer(results)}</h4>
            <h4>Most Challenges: {challenges.mostChallengesPlayer(results)}</h4>
        </Container>
    )
}