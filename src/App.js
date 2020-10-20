import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/global.css';
import BaseLayout from './components/layout/BaseLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';

class App extends Component {
	render() {
		return (
			<Router>
				<BaseLayout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/movies" component={Movies} />
					</Switch>
				</BaseLayout>
			</Router>
		);
	}
}

export default App;
