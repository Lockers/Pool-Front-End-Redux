import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import {
    getPlayersReducer,
    // getResultsReducer,
} from './reducers/Reducers';

import './index.css';
import App from './App';

// const rootReducer = combineReducers({
//     getPlayersReducer,
//     getResultsReducer,
// })

const store = createStore(
    getPlayersReducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider >
    </BrowserRouter >,
    rootElement
);

