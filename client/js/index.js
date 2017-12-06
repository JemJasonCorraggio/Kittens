require('babel-polyfill');

import * as actions from './actions/index';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import KittenContainer from './components/kitten-container';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <KittenContainer />
        </Provider>,
        document.getElementById('app')
    )
);

