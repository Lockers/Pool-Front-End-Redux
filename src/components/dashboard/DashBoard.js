import React from 'react';
import { useSelector } from 'react-redux';
import { useGetStats } from '../../helpers/GetStats';
import { venues, rulesets } from '../../helpers/Data';
import PieChart from '../display/DonutChart';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export const DashBoard = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            [theme.breakpoints.up('xs')]: {
                display: 'flex',
                flexDirection: 'column',
            },

            [theme.breakpoints.up('sm')]: {
                maxWidth: '600px',
                width: '100%',
                flexDirection: "row",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: '850px',
                width: '100%',
                flexDirection: "row",
            },
            [theme.breakpoints.up('lg')]: {
                maxWidth: '1200px',
                width: '100%',
                flexDirection: "row",
                // margin: '0 auto',
                flexWrap: 'wrap'
            },
        },
    }));

    const results = useSelector(state => state.results)
    const players = useSelector(state => state.players)
    const stats = useGetStats(results)
    const obj = stats.getHighestChallenger(players)
    const mostchallenged = stats.getMostChallenged(players)
    const classes = useStyles()
    
    if (!obj) {
        return <h1>Loading</h1>
    }
    return (
        <Container classes={{
            root: classes.root
        }}>
            <h1>Dashboard</h1>
                <h3>Venues Used</h3>
                <PieChart stats={stats.getStats(venues)} />

                <h3>Rulesets Played</h3>
                <PieChart stats={stats.getStats(rulesets)} />
            
                <h3>Total Games Played: {results.length} </h3>
                <PieChart stats={stats.getChallengesWon(results)} />
            
            <h4>Total Prize Money Played for: £{stats.amountPlayedFor}</h4>
            <h4>Average Pot: £{Math.round(stats.amountPlayedFor / results.length)}</h4>
            <h4>Most Challenged Player: {mostchallenged.name} ({mostchallenged.count})</h4>
            <h4>Player with most challenges: {obj.name} ({obj.count}) </h4>
        </Container>
    )
}