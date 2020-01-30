import React, { useState } from 'react';
import { usePlayerCardHelper } from '../../helpers/PlayerCardHelper';
import { venues, rulesets } from '../../helpers/Data';
import { makeStyles } from '@material-ui/core/styles';
import { useGetStats } from '../../helpers/GetStats';
import PieChart from '../display/DonutChart';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ResultsList from '../../components/display/ResultsList';
import { Container, Divider } from '@material-ui/core';
import { useGetHoursLeft } from '../../helpers/GetHoursLeft';
import { ResponsiveContainer } from 'recharts';

//Styles for player cards and expanding buttons

const useStyles = makeStyles(theme => ({
    root: {
        width: 500, 
        margin: '0 auto',  
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 450,
        height: 'auto',
        margin: '0 auto',
        marginTop: '3rem',
        color: '#01618C',
        fontWeight: 'bolder',
        textAlign: 'center',
    },
 
    expand: {
        transform: 'rotate(deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        margin: '0 auto',
        textAlign: 'center',

    },
    expandOpen: {
        width: 200
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const PlayerCard = (props) => {

    //import Classes for styles

    const classes = useStyles();

    //Set State for two expanding click handlers
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false)
    const stats = useGetStats(props.player.results)
    const hoursLeft = useGetHoursLeft(props.player)
    
    //Set results array from props and reverse array to get latest results first
    const [resultArray] = useState([...props.player.results].reverse())

    //Custom hook for getting form
    const playerHelper = usePlayerCardHelper(props)

    //Calculate win percentage from played games (from props)
    const winPercentage = Math.round(props.player.won / props.player.played * 100);

    //Handles button expand click
    const handleResultsExpandClick = () => {
        if (expanded1) {
            setExpanded1(!expanded1)
        }
        setExpanded(!expanded);
    };

    //Handles Stats Expand click
    const handleStatsExpandClick = () => {
        if (expanded) {
            setExpanded(!expanded)
        }
        setExpanded1(!expanded1);
    };

    //Gets whether a player can be challenged or issue a challenged (48 hour cooling off period)
    const getCanBeChallenged = (player, hoursLeft) => {
        if (player.results[props.player.results.length - 1].challenger === player.name) {
            if (hoursLeft.hours(props.player) > 0)
                return <p>Cannot Challenge for {hoursLeft.hours(player)} Hours</p>
        }
        if (player.results[props.player.results.length - 1].challenged === player.name) {
            if (hoursLeft.hours(props.player) > 0)
                return <p>Cannot be challenged for {hoursLeft.hours(player)} Hours</p>
        }
    }

    if (!props) {
        return <div>Loading</div>
    }

    //Returns Material UI Card with player details, form.... TODO Stats
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader />
                <Typography variant="h6" color="inherit" component="div">{props.player.name} 
                </Typography>
                <Divider style={{ marginTop: '1rem'}}/>
                <CardContent>
                    <Typography variant="h6" color="inherit" component="div">
                        <p>League Position: {props.player.leaguePosition}</p>
                        <p>Played: {props.player.played}</p>
                        <p>Won: {props.player.won}</p>
                        <p>Win Percentage: {winPercentage}%</p>
                        <p>Form {playerHelper.getForm(resultArray, props)} </p>
                        {getCanBeChallenged(props.player, hoursLeft)}
                        

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='primary'
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleResultsExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >Results
                        <ExpandMoreIcon />
                    </Button>
                    <Button variant='contained' color='primary'
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded1,
                        })}
                        onClick={handleStatsExpandClick}
                        aria-expanded={expanded1}
                        aria-label="show more"
                    >Stats
                        <ExpandMoreIcon />
                    </Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Previous Results</Typography>
                        {resultArray.map((result, index) => <ResultsList key={index} style={{ fontSize: '14px' }} result={result} />)}
                    </CardContent>
                </Collapse>
                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <Container>
                        <CardContent>
                            <h1>Dashboard</h1>
                            <h3>Venues Used</h3>
                            <ResponsiveContainer height={300} width={400}>
                                <PieChart stats={stats.getIndividualStats(props.player, venues)} />
                            </ResponsiveContainer>
                            <h3>Rulesets Played</h3>
                            <PieChart stats={stats.getIndividualStats(props.player, rulesets)} />

                            <h3>Total Games Played: {props.player.results.length} </h3>
                            <PieChart stats={stats.getChallengesWon(props.player)} />

                            <h4>Total Prize Money Played for: £{stats.amountPlayedFor}</h4>
                            <h4>Average Pot: £{Math.round(stats.amountPlayedFor / props.player.results.length)}</h4>
                        </CardContent>
                    </Container>
                </Collapse>
            </Card>
        </div >
    );
}