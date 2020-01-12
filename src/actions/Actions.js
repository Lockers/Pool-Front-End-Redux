import {
    GETTING_ALL_PLAYERS,
    GETTING_ALL_PLAYERS_SUCCESS,
    GETTING_ALL_PLAYERS_FAILED
} from './ActionTypes';
import axios from 'axios';

const baseUrl = 'https://telford-pool-back-end.herokuapp.com/players';

export const getPlayers = () => dispatch => {
    dispatch({ type: GETTING_ALL_PLAYERS });
    axios
        .get(baseUrl)
        .then(res => {
            dispatch({ type: GETTING_ALL_PLAYERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_ALL_PLAYERS_FAILED, payload: err.msg })
        })
}