import React, {Component} from 'react';

class Home extends Component {
	handleExplore = () => {
		const {history} = this.props;
		history.push('/movies');
	};

	render() {
		return (
			<div className="home">
				<h2 style={{padding: 0, margin: 0}}>Movies</h2>
				<p>A list of my favorite movies</p>
				<button className="btn" onClick={this.handleExplore}>
					Explore
				</button>
			</div>
		);
	}
}

export default Home;
