import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BaseLayout extends Component {
	render() {
		const {children} = this.props;

		return (
			<div className="view-container">
				<div className="header">
					<Link className="header__title" to="/">
						Movies
					</Link>
					<Link className="login-title" to="/login">
						Login
					</Link>
				</div>

				{children}
			</div>
		);
	}
}

export default BaseLayout;
