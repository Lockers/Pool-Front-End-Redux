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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ResultsList from '../../components/display/ResultsList';
import { Container } from '@material-ui/core';

//Styles for player cards and expanding buttons

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 500,
        margin: '0 auto',
        marginTop: '3rem',
        color: 'blue',
        fontWeight: 'bolder',
        textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
        margin: '0 auto',
        textAlign: 'center',

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
    // const obj = stats.getHighestChallenger(players)
    // const mostchallenged = stats.getMostChallenged(props.player)

    //Set results array from props and reverse array to get latest results first
    const [resultArray] = useState([...props.player.results].reverse())

    //Custom hook for getting form
    const playerHelper = usePlayerCardHelper(props)

    //Calculate win percentage from played games (from props)
    const winPercentage = Math.round(props.player.won / props.player.played * 100);

    //Handles button expand click
    const handleResultsExpandClick = () => {
        setExpanded(!expanded);
    };

    //Handles Stats Expand click
    const handleStatsExpandClick = () => {
        setExpanded1(!expanded1);
    };

    if (!props) {
        return <div>Loading</div>
    }



    //Returns Material UI Card with player details, form.... TODO Stats
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.player.name}
                />
                <CardContent>
                    <Typography variant="body2" color="secondary" component="div">
                        <p>League Position: {props.player.leaguePosition}</p>
                        <p>Played: {props.player.played}</p>
                        <p>Won: {props.player.won}</p>
                        <p>Win Percentage: {winPercentage}%</p>
                        <p>Form {playerHelper.getForm(resultArray, props)} </p>

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
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleStatsExpandClick}
                        aria-expanded={expanded}
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
                    <Container style={{ margin: '0 auto' }}>
                        <CardContent style={{ margin: '0 auto' }}>
                            <h1>Dashboard</h1>
                            <h3>Venues Used</h3>
                            <PieChart stats={stats.getIndividualStats(props.player, venues)} />

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