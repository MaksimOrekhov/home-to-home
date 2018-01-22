import React, { Component } from 'react';
import BoxesListContainer from './components/BoxesListContainer';
import StatusBar from './components/StatusBar';
import './styles/App.css'


class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			boxesAmount: 0,
			itemsSumm: 0
		}
	}

	boxesAmount = () => {
		this.setState({
			boxesAmount: this.state.boxesAmount + 1
		})
	}

	boxesClosed = () => {
		this.setState({
			boxesAmount: this.state.boxesAmount - 1
		})
	}

	summOfItems = () => {
		this.setState({
			itemsSumm: this.state.itemsSumm + 1
		})	
	}

	itemsMinus = () => {
		this.setState({
			itemsSumm: this.state.itemsSumm - 1
		})
	}

	itemsInList = (value) => {
		this.setState({
			itemsSumm: this.state.itemsSumm - value
		})
	}
	
	
  render () {
    return (
      <div className="App">
	      <header className="header">
		      <nav className="main-nav">
			      <StatusBar amount={this.state.boxesAmount} itemsInBoxes={this.state.itemsSumm}/>
		      </nav>
	      </header>
	      <main>
		      
		      <BoxesListContainer boxAmount={this.boxesAmount} boxesMinus={this.boxesClosed} itemsSum={this.summOfItems} minItems={this.itemsMinus} itemsInList={this.itemsInList}/>
		      
	      </main>
				
      </div>
    );
  }
}

export default App;
