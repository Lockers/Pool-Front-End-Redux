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
} from '../actions/ActionTypes';

const initialState = {
    players: [],
    fetchingPlayers: false,
    results: [],
    fetchingResults: false,
    challenges: [],
    fetchingChallenges: false,
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
        case GETTING_ALL_RESULTS:
            return {
                ...state,
                fetchingResults: true
            };
        case GETTING_ALL_RESULTS_FAILED:
            return {
                ...state,
                fetchingResults: false,
                error: action.payload
            };
        case GETTING_ALL_RESULTS_SUCCESS:
            return {
                ...state,
                fetchingResults: false,
                results: [...state.results, ...action.payload],
            }
        case GETTING_ALL_CHALLENGES:
            return {
                ...state,
                fetchingChallenges: true
            };
        case GETTING_ALL_CHALLENGES_FAILED:
            return {
                ...state,
                fetchingChallenges: false,
                error: action.payload
            };
        case GETTING_ALL_CHALLENGES_SUCCESS:
            return {
                ...state,
                fetchingChallenges: false,
                challenges: [...state.challenges, ...action.payload],
            }
        default: return state;
    }
}

