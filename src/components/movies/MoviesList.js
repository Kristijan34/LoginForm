import React, {Component} from 'react';
import MoviesListItem from './MovieListItem';

class MoviesList extends Component {
	state = {
		movieTitle: '',
		movies: [],
	};

	handleAddMovie = (event) => {
		event.preventDefault();

		this.setState(
			(state) => ({
				movies: [
					...state.movies,
					{
						id: Date.now(),
						title: state.movieTitle,
					},
				],
			}),
			() => {
				this.setState({movieTitle: ''});
			}
		);
	};

	handleMovieTitleChange = (event) => {
		this.setState({movieTitle: event.target.value});
	};

	handleDeleteMovie = (id) => () => {
		this.setState((state) => ({
			movies: state.movies.filter((movie) => movie.id !== id),
		}));
	};

	render() {
		const {movies, movieTitle} = this.state;

		return (
			<div className="movies__container">
				<div className="movies__header">Movies List</div>
				<form onSubmit={this.handleAddMovie}>
					<input
						className="movie-input"
						placeholder="Enter your movie"
						value={movieTitle}
						onChange={this.handleMovieTitleChange}
					/>
				</form>
				<div className="movies__list">
					{movies.map((movie) => {
						return (
							<MoviesListItem
								key={movie.id}
								movie={movie}
								handleDelete={this.handleDeleteMovie}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MoviesList;
