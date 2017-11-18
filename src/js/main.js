import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

// redux store stuff
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/dataReducer';

// styles
require('../styles/app.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);




render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'));