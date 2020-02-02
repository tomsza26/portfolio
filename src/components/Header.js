import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<div id="headerIn">
						<nav />
						<div id="headerContent">
							<div id="leftContainer">
								<a href="https://github.com/tomsza26" target="_blank">
									<FontAwesomeIcon icon={faGithub} size="3x" color="#f05133" />
								</a>
							</div>
							<div id="nameContainer">
								<div id="name">//Tomasz Szablewski</div>
								<div id="frontWeb">Front End Web Developer </div>
							</div>
						</div>
					</div>
				</header>
				<section />
				<footer />
			</React.Fragment>
		);
	}
}

export default Header;
