import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/global.css';
import BaseLayout from './components/layout/BaseLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Login from './pages/LoginPage/Login';
import Admin from './pages/LoginPage/Admin';
import Logout from './pages/LoginPage/Logout';

class App extends Component {
	render() {
		return (
			<Router>
				<BaseLayout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/movies" component={Movies} />
						<Route path="/login" component={Login} />
						<Route path="/admin" component={Admin} />
						<Route path="/logout" component={Logout} />
					</Switch>
				</BaseLayout>
			</Router>
		);
	}
}

export default App;
