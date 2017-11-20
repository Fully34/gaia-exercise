import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';

// redux store stuff
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/dataReducer';
import { initialize } from './saga/saga';

// page level styles
require('../styles/css/bootstrap.css');
require('../styles/util.scss');
require('../styles/page.scss');

// create saga and store
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(middleware)
);

// run saga
sagaMiddleware.run(initialize);

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
);