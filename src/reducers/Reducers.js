import {
    GETTING_ALL_PLAYERS,
    GETTING_ALL_PLAYERS_SUCCESS,
    GETTING_ALL_PLAYERS_FAILED
} from '../actions/ActionTypes';

const initialState = {
    players: [],
    fetchingPlayers: false,
    error: null
}

export const getPlayersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ALL_PLAYERS:
            return {
                ...state,
                fetchingPlayers: true
            };
        case GETTING_ALL_PLAYERS_FAILED:
            return {
                ...state,
                fetchingPlayers: false,
                error: action.payload
            };
        case GETTING_ALL_PLAYERS_SUCCESS:
            return {
                ...state,
                fetchingPlayers: false,
                players: [...state.players, ...action.payload],
            }
        default: return state;
    }
}