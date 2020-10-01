import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {reducer,fetchGroups} from './reducer'


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchGroups())


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
