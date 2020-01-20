import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVenueStats, getRulesetStats, getChallengeStats, getResults } from '../../store/actions/Actions';
import PieChart from '../display/DonutChart';
import { Loader } from '../display/Loader';

export const DashBoard = () => {

    const stats = useSelector(state => state.stats)
    const rulesets = useSelector(state => state.rulesets)
    const challenge = useSelector(state => state.challenge)
    const results = useSelector(state => state.results)
    const [mostChallenged, setMostChallenged] = useState()
    const [fire, setFire] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVenueStats())
        dispatch(getRulesetStats())
        dispatch(getChallengeStats())
        dispatch(getResults())
        setFire(true)
    }, [dispatch])

    useEffect(() => {
        if (fire === true) {
            setMostChallenged(mostChallengedPlayer(results))
            setFire(false)
        }
    },[results])

    function mode(arr) {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }
    const mostChallengedPlayer = (results) => {
        let test = []
        for (let i = 0; i < results.length; i++) {
            const name = results[i].challenger
            for (let k = 0; k < results.length; k++) {
                if (results[k].challenger === name) {
                    test.push(name)

                }
            }
        }
        return mode(test)
    }
    if (!stats || !rulesets || !challenge || !results || !mostChallenged) {
        return <Loader />
    }
    const totalGamesPlayed = challenge.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.value
    }, 0)
    const amountPlayedFor = results.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue.pot
    }, 0)

    return (
        <div>
            {console.log(mostChallenged)}
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
            <div>
                Total Prize Money Played for: £{amountPlayedFor}
               
            </div>
            Average Pot: £{Math.round(amountPlayedFor / totalGamesPlayed)}
            <div>
                Most Challenged Player: {mostChallenged}

            </div>
        </div>
    )
}