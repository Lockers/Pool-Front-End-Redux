import {
    GETTING_ALL_PLAYERS,
    GETTING_ALL_PLAYERS_SUCCESS,
    GETTING_ALL_PLAYERS_FAILED,
    GETTING_ALL_RESULTS,
    GETTING_ALL_RESULTS_SUCCESS,
    GETTING_ALL_RESULTS_FAILED,
    GETTING_ALL_CHALLENGES,
    GETTING_ALL_CHALLENGES_SUCCESS,
    GETTING_ALL_CHALLENGES_FAILED,
    GETTING_ALL_VENUES_STATS,
    GETTING_ALL_VENUES_STATS_SUCCESS,
    GETTING_ALL_VENUES_STATS_FAILED,
    GETTING_ALL_RULESETS_STATS,
    GETTING_ALL_RULESETS_STATS_SUCCESS,
    GETTING_ALL_RULESETS_STATS_FAILED,
    GETTING_ALL_CHALLENGE_STATS,
    GETTING_ALL_CHALLENGE_STATS_SUCCESS,
    GETTING_ALL_CHALLENGE_STATS_FAILED,
} from './ActionTypes';
import axios from 'axios';

// const baseUrl = 'https://telford-pool-back-end.herokuapp.com/';
const baseUrl = 'http://localhost:5000/'

export const getPlayers = () => dispatch => {
    dispatch({ type: GETTING_ALL_PLAYERS });
    axios
        .get(`${baseUrl}players`)
        .then(res => {
            dispatch({ type: GETTING_ALL_PLAYERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_PLAYERS_FAILED, payload: err.msg })
        })
}

export const getResults = () => dispatch => {
    dispatch({ type: GETTING_ALL_RESULTS });
    axios
        .get(`${baseUrl}results`)
        .then(res => {
            dispatch({ type: GETTING_ALL_RESULTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_RESULTS_FAILED, payload: err.msg })
        })
}

export const getChallenges = () => dispatch => {
    dispatch({ type: GETTING_ALL_CHALLENGES });
    axios
        .get(`${baseUrl}challenges`)
        .then(res => {
            dispatch({ type: GETTING_ALL_CHALLENGES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_CHALLENGES_FAILED, payload: err.msg })
        })
}

export const getVenueStats = () => dispatch => {
    dispatch({ type: GETTING_ALL_VENUES_STATS });
    axios
        .get(`${baseUrl}results/stats/venues`)
        .then(res => {
            dispatch({ type: GETTING_ALL_VENUES_STATS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_VENUES_STATS_FAILED, payload: err.msg })
        })
}

export const getRulesetStats = () => dispatch => {
    dispatch({ type: GETTING_ALL_RULESETS_STATS });
    axios
        .get(`${baseUrl}results/stats/rulesets`)
        .then(res => {
            dispatch({ type: GETTING_ALL_RULESETS_STATS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_RULESETS_STATS_FAILED, payload: err.msg })
        })
}

export const getChallengeStats = () => dispatch => {
    dispatch({ type: GETTING_ALL_CHALLENGE_STATS });
    axios
        .get(`${baseUrl}results/stats/challengeswon`)
        .then(res => {
            dispatch({ type: GETTING_ALL_CHALLENGE_STATS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_CHALLENGE_STATS_FAILED, payload: err.msg })
        })
}