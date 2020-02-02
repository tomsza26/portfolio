import React from 'react';
import '../App.scss';

particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="particles-js" />
			</React.Fragment>
		);
	}
}

export default Main;
