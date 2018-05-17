import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import Routes from './routes';
import { createCookieMiddleware } from './cookie';
import sagas from './sagas';
import reducers from './reducers';

export default class App {
    constructor({ $root }) {
        this.history = createHistory();
        this.$root = $root;

        const cookieMiddleware = createCookieMiddleware($root.ownerDocument);
        this.sagaMiddleware = createSagaMiddleware(),

        this.store = createStore(reducers, applyMiddleware(cookieMiddleware, this.sagaMiddleware));
    }

    run() {
        this.sagaMiddleware.run(sagas);

        ReactDOM.render((
            <Provider store={this.store}>
                <ConnectedRouter history={this.history}>
                    <Routes></Routes>
                </ConnectedRouter>
            </Provider>
        ), this.$root);
    }
}
