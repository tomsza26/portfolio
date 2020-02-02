import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;
