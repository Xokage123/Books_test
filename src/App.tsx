//React+Redux
import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
// Components
import Header from './components/Header/Header'
import { Main } from './components/Main'
// Store
import { store } from './store/index'

export const App = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Main />
        </Router>
    </Provider>
)
