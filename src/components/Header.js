import React from 'react';
import '../App.scss';
import Particles from 'react-particles-js';
import particles from './particlesjs.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';
import { faHtml5, faCss3Alt, faReact, faJs, faGitAlt, faSass } from '@fortawesome/free-brands-svg-icons';

const particleOpt = particles;

class Header extends React.Component {
	Clicked = () => {
		document.querySelector('#arrow-down').scrollIntoView({
			behavior: 'smooth'
		});
	};
	render() {
		return (
			<header id="start">
				<Particles params={particleOpt} />
				<div id="headerIn">
					<div id="headerContent">
						<div id="leftContainer">
							<a href="https://github.com/tomsza26" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faGithub} size="3x" color="#f05133" />
							</a>
						</div>
						<div id="nameContainer">
							<div id="name">
								<Typewriter
									onInit={(typewriter) => {
										typewriter.typeString('//Tomasz Szablewski').start();
									}}
									options={{
										delay: 150
									}}
								/>
							</div>
							<div id="frontWeb">
								<Typewriter
									onInit={(typewriter) => {
										typewriter.pauseFor(3200).typeString('Front End Web Developer').start();
									}}
									options={{
										delay: 120
									}}
								/>{' '}
							</div>
						</div>
					</div>
				</div>
				<section id="iconContainer">
					<FontAwesomeIcon icon={faHtml5} size="4x" color="#e34d26" />
					<FontAwesomeIcon icon={faCss3Alt} size="4x" color="#0070bb" />
					<FontAwesomeIcon icon={faReact} size="4x" color="#61d9fa" />
					<FontAwesomeIcon icon={faJs} size="4x" color="#f7df1e" />
					<FontAwesomeIcon icon={faGitAlt} size="4x" color="#f05133" />
					<FontAwesomeIcon icon={faSass} size="4x" color="#cc6699" />
				</section>
				<div id="arrow-down" onClick={this.Clicked}>
					<div className="arrow arrow-first" />
					<div className="arrow arrow-second" />
				</div>
			</header>
		);
	}
}

export default Header;
