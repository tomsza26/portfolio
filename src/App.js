import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<AboutMe />
				<Main />
				<Contact />
			</div>
		);
	}
}

export default App;
