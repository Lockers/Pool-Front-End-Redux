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
} from '../actions/ActionTypes';

const initialState = {
    players: [],
    fetchingPlayers: false,
    results: [],
    fetchingResults: false,
    challenges: [],
    fetchingChallenges: false,
    stats: [],
    fetchingStats: false,
    rulesets: [],
    fetchingRulesets: false,
    challenge: [],
    fetchingChallenge: false,
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
            };
        case GETTING_ALL_VENUES_STATS:
            return {
                ...state,
                fetchingStats: true
            };
        case GETTING_ALL_VENUES_STATS_FAILED:
            return {
                ...state,
                fetchingStats: false,
                error: action.payload
            };
        case GETTING_ALL_VENUES_STATS_SUCCESS:
            return {
                ...state,
                fetchingStats: false,
                stats: [...state.stats, ...action.payload],
            }
        case GETTING_ALL_RULESETS_STATS:
            return {
                ...state,
                fetchingRulesets: true
            };
        case GETTING_ALL_RULESETS_STATS_FAILED:
            return {
                ...state,
                fetchingRulesets: false,
                error: action.payload
            };
        case GETTING_ALL_RULESETS_STATS_SUCCESS:
            return {
                ...state,
                fetchingRulesets: false,
                rulesets: [...state.rulesets, ...action.payload],
            }
        case GETTING_ALL_CHALLENGE_STATS:
            return {
                ...state,
                fetchingChallenge: true
            };
        case GETTING_ALL_CHALLENGE_STATS_FAILED:
            return {
                ...state,
                fetchingChallenge: false,
                error: action.payload
            };
        case GETTING_ALL_CHALLENGE_STATS_SUCCESS:
            return {
                ...state,
                fetchingChallenge: false,
                challenge: [...state.challenge, ...action.payload],
            }
        default: return state;
    }
}

