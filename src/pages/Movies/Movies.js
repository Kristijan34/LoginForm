import React, {Component} from 'react';
import MoviesList from '../../components/movies/MoviesList';

class Movies extends Component {
	render() {
		return (
			<div className="movies">
				<MoviesList />
			</div>
		);
	}
}

export default Movies;
