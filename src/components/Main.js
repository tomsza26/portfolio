import React from 'react';
import '../App.scss';
import projects from './projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Main extends React.Component {
	render() {
		return (
			<main>
				<article id="projects">
					<header>Projects</header>
					{projects.map((data, index) => {
						return (
							<section key={index} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
								<div className="leftSide">
									<header>{data.name}</header>
									<div className="imgCont">
										<img src={require('../images' + data.image)} alt="imgProject" />
										<div className="links">
											<a href={data.linkLive} target="_blank" rel="noopener noreferrer">
												<FontAwesomeIcon icon={faDesktop} size="1x" color="#f05133" /> Live
												preview
											</a>
											<a href={data.linkCode} target="_blank" rel="noopener noreferrer">
												<FontAwesomeIcon icon={faCodeBranch} size="1x" color="#f05133" /> Source
												code
											</a>
										</div>
									</div>
									<div className="techCont">
										<header>Technologies used</header>
										<ul>
											{data.techUsed.map((list, i) => {
												return <li key={i}>{list}</li>;
											})}
										</ul>
									</div>
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
