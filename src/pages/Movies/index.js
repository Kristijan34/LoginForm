import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MovieDetails from './MovieDetails';

class Movies extends Component {
	render() {
		const {match} = this.props;

		return (
			<Switch>
				<Route exact path={match.path}>
					<h2>Movies</h2>
				</Route>
				<Route
					path={`${match.path}/:movieId`}
					component={MovieDetails}
				/>
			</Switch>
		);
	}
}

export default Movies;
