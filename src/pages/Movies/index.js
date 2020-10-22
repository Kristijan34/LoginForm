import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MovieDetails from './MovieDetails';
import MoviesPage from './Movies';

class Movies extends Component {
	render() {
		const {match} = this.props;

		return (
			<Switch>
				<Route exact path={match.path} component={MoviesPage} />
				<Route
					path={`${match.path}/:movieId`}
					component={MovieDetails}
				/>
			</Switch>
		);
	}
}

export default Movies;
