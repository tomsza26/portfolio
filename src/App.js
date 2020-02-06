import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

class App extends React.Component {
	topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	scrollFunction = () => {
		let mybutton = document.querySelector('#myBtn');
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = 'block';
		} else {
			mybutton.style.display = 'none';
		}
	};

	componentDidMount() {
		this.scrollFunction();
		window.onscroll = () => {
			this.scrollFunction();
		};
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.topFunction} id="myBtn" title="Go to top">
					<img src={require('./images/up-arrow.png')} alt="Top" />
				</button>
				<Header />
				<AboutMe />
				<Main />
				<Contact />
			</div>
		);
	}
}

export default App;
