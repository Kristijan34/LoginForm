import React, {Component} from 'react';

class MoviesListItem extends Component {
	render() {
		const {movie, handleDelete} = this.props;

		return (
			<div className="movies__list-item">
				<span>{movie.title}</span>
				<span className="delete-movie" onClick={handleDelete(movie.id)}>
					&times;
				</span>
			</div>
		);
	}
}

export default MoviesListItem;
