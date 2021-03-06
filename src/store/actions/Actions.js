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
} from './ActionTypes';

import axios from 'axios';


const baseUrl = 'https://telford-pool-back-end.herokuapp.com/';
// const baseUrl = 'http://localhost:5000/'

export const getPlayers = () => dispatch => {
    
    dispatch({ type: GETTING_ALL_PLAYERS });
    axios
        .get(`${baseUrl}players`)
        .then(res => {
            console.log(res.data)
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
