import React, { Component } from 'react';
import './App.scss';
import Home from './components/home'
// import Login from './components/login'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
			</div>
		);
	}
}
export default App;
