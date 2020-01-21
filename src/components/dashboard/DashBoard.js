import React from 'react';
import { useSelector } from 'react-redux';
import { usePlayerChallenges } from '../../helpers/PlayerChallenges';
import { useGetStats } from '../../helpers/GetStats';
import { venues, rulesets } from '../../helpers/Data';
import PieChart from '../display/DonutChart';

export const DashBoard = () => {

    const results = useSelector(state => state.results)
    const challenges = usePlayerChallenges(results)
    const stats = useGetStats(results)
    
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h3>Venues Used</h3>
                <PieChart stats={stats.getStats(venues)} />
            </div>
            <div>
                <h3>Rulesets Played</h3>
                <PieChart stats={stats.getStats(rulesets)} />
            </div>
            <div>
                <h3>Total Games Played: {results.length} </h3>
                <PieChart stats={stats.getChallengesWon(results)} />
            </div>
            <div>
                Total Prize Money Played for: £{challenges.amountPlayedFor}

            </div>
                Average Pot: £{Math.round(challenges.amountPlayedFor / results.length)}
            <div>
                Most Challenged Player: {challenges.mostChallengedPlayer(results)}

            </div>
            <div>
                Most Challenges: {challenges.mostChallengesPlayer(results)}

            </div>
        </div>
    )
}