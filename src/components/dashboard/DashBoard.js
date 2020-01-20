import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVenueStats, getRulesetStats, getChallengeStats } from '../../store/actions/Actions';
import PieChart from '../display/DonutChart';

export const DashBoard = () => {

    const stats = useSelector(state => state.stats)
    const rulesets = useSelector(state => state.rulesets)
    const challenge = useSelector(state => state.challenge)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenueStats())
        dispatch(getRulesetStats())
        dispatch(getChallengeStats())
    }, [dispatch])

    if (!stats || !rulesets || !challenge) {
        return <h1>Loader</h1>
    }
    const totalGamesPlayed = challenge.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.value
    }, 0)
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h3>Venues Used</h3>
                <PieChart stats={stats} />
            </div>
            <div>
                <h3>Rulesets Played</h3>
                <PieChart stats={rulesets} />
            </div>
            <div>
                <h3>Total Games Played: {totalGamesPlayed} </h3>
                <PieChart stats={challenge} />
            </div>
        </div>
    )
}