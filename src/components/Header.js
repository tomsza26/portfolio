import React from 'react';
import '../App.scss';
import Particles from 'react-particles-js';
import particles from './particlesjs.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const particleOpt = particles;

class Header extends React.Component {
	render() {
		return (
			<header>
				<Particles params={particleOpt} />
				<div id="headerIn">
					<nav />
					<div id="headerContent">
						<div id="leftContainer">
							<a href="https://github.com/tomsza26" target="_blank" rel="noopener noreferrer">
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
		);
	}
}

export default Header;
