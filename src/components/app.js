import React, { Component } from 'react';

import { Route, Switch } from 'react-router';
import Provider from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import Home from './home';

const createStoreWithMiddleware = applyMiddleware()(createStore); // Here you can apply multiple middlewares to your app.

class App extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware}>
				<BrowserRouter>
					<Switch>
						<Route path="/home" component={Home} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;