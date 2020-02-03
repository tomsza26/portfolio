import React from 'react';
import '../App.scss';
import projects from './projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faGitAlt, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

class Main extends React.Component {
	render() {
		return (
			<main>
				<section id="iconContainer">
					<FontAwesomeIcon icon={faHtml5} size="4x" color="#e34d26" />
					<FontAwesomeIcon icon={faCss3Alt} size="4x" color="#0070bb" />
					<FontAwesomeIcon icon={faReact} size="4x" color="#61d9fa" />
					<FontAwesomeIcon icon={faJs} size="4x" color="#f7df1e" />
					<FontAwesomeIcon icon={faGitAlt} size="4x" color="#f05133" />
					<FontAwesomeIcon icon={faSass} size="4x" color="#cc6699" />
				</section>
				<article id="projects">
					<header>Projects</header>
					{projects.map((data, index) => {
						return (
							<section key={index}>
								<div className="leftSide">
									<header>{data.name}</header>
									<img
										src={require('../images' + data.image)}
										alt="img"
										width="300px"
										height="200px"
									/>
									<div className="links">
										<a href={data.linkLive} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faDesktop} size="1x" color="#f05133" /> Live preview
										</a>
										<a href={data.linkCode} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faCodeBranch} size="1x" color="#f05133" /> Source
											code
										</a>
									</div>
									<header>Technologies used</header>
									<ul>
										{data.techUsed.map((list, i) => {
											return <li key={i}>{list}</li>;
										})}
									</ul>
								</div>
								<div className="rightSide">
									<header>Overwiew</header>
									<div className="overwiev">{data.overwiew}</div>
								</div>
							</section>
						);
					})}
				</article>
			</main>
		);
	}
}

export default Main;
